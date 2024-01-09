// middleware.ts
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { UserRole } from '@/types'

const authenticated: { [key in UserRole]: RegExp[] } = {
  investor: [
    /\/dashboard.*/,
    /\/invest.*/,
    /\/startup\/updates/,
    /\/startup\/update.*/,
    /\/profile\/investor.*/,
    /\/transactions.*/,
    /\/referral.*/,
    /\/payment.*/,
    /\/portfolio.*/,
  ],
  startup: [
    /\/dashboard\/startup.*/,
    /\/profile\/startup.*/,
    /\/startup(?!\/(updates|update)).*/,
  ],
  admin: [/\/dashboard\/investor.*/],
}

const publicPaths = [
  /^\/$/,
  /\/learn.*/,
  /\/contact-us.*/,
  /\.(svg|png|jpeg|webp|jpg)$/,
  /\.(js|css|map)$/, // <-- match js, css, map (sourcemap) files
  /_next.*\//,
  /^\/?(su|in)\d+[a-z]*\d*[a-z]*\d*$/,
  /\/refer_code.*/,
] // <-- match next.js specific paths like static files]
const unauthenticated = [
  /\/login/,
  /\/signup/,
  /\/otp.*/,
  /\/social.*/,
  /\/socialLogin.*/,
]


export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')
  const role = req.cookies.get('role')?.value as UserRole
  const path = req.nextUrl.pathname
  const url = req.nextUrl.clone()

  const matchPath = (patterns: RegExp[]) =>
    patterns.some((pattern) => pattern.test(path))

  if ((!token || !role) && !matchPath([...publicPaths, ...unauthenticated])) {
    if (matchPath(authenticated['startup'])) {
      url.pathname = '/login/startup'
    } else {
      url.pathname = '/login'
    }
    return NextResponse.redirect(url)
  }
  if (
    token &&
    role &&
    role in authenticated &&
    !matchPath(authenticated[role])
  ) {
    if (matchPath(publicPaths)) {
      return NextResponse.next()
    }
    console.log('Redirecting to dashboard')
    url.pathname = role !== 'investor' ? `/dashboard/${role}` : '/dashboard'
    return NextResponse.redirect(url)
  }
  if (
    token &&
    role &&
    role in authenticated &&
    matchPath(authenticated[role])
  ) {
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    '/((?!api|logout|me|verify-otp|verify-social-login|_next/static|_next/image|favicon.ico|public).*)',
  ],
}

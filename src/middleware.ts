// middleware.ts
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { UserRole } from '@/types'

const authenticated: { [key in UserRole]: RegExp[] } = {
  investor: [
    /\/dashboard.*/,
    /\/invest.*/,
    /\/profile\/investor.*/,
    /\/transactions.*/,
    /\/referral.*/,
    /\/payment.*/,
  ],
  startup: [/\/dashboard\/startup.*/, /\/profile\/startup.*/, /\/startup.*/],
  admin: [/\/dashboard\/investor.*/],
}

const publicPaths = [/^\/$/, /\.(svg|png|jpeg)$/]
const unauthenticated = [/\/login/, /\/signup/, /\/otp.*/]

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')
  const role = req.cookies.get('role')?.value as UserRole
  const path = req.nextUrl.pathname
  const url = req.nextUrl.clone()
  
  const matchPath = (patterns: RegExp[]) =>
    patterns.some((pattern) => pattern.test(path))
  
  if ((!token || !role) && !matchPath([...publicPaths, ...unauthenticated])) {
    url.pathname = '/login'
    return NextResponse.rewrite(url)
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
    '/((?!api|logout|me|verify-otp|_next/static|_next/image|favicon.ico|public).*)',
  ],
}

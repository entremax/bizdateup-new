// middleware.ts
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { UserRole } from '@/types'

const authenticated: { [key in UserRole]: RegExp[] } = {
  investor: [
    /\/dashboard\/investor.*/,
    /\/invest.*/,
    /\/profile\/investor.*/,
    /\/transactions.*/,
    /\/referral.*/,
  ],
  startup: [/\/dashboard\/startup.*/, /\/profile\/startup.*/],
  admin: [/\/dashboard\/investor.*/],
}
const publicPaths = [/^\/$/, /\/login/, /\/signup/, /\/otp.*/]

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')
  const role = req.cookies.get('role')?.value as UserRole
  const path = req.nextUrl.pathname
  const url = req.nextUrl.clone()
  const matchPath = (patterns: RegExp[]) =>
    patterns.some((pattern) => pattern.test(path))
  
  if (
    (token &&
      role &&
      role in authenticated &&
      matchPath(authenticated[role])) ||
    matchPath(publicPaths)
  ) {
    return NextResponse.next()
  }
  
  if (token) {
    url.pathname = `/dashboard/${role}`
    return NextResponse.redirect(url)
  }
  url.pathname = `/login`
  return NextResponse.rewrite(url) // this line is reached if the token is not found
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|logout|me|verify-otp|_next/static|_next/image|favicon.ico).*)',
    '/public/:path',
  ],
}

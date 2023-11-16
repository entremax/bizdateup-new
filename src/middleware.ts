// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const pathType = {
  unAuthenticated: [/\/login/, /\/signup/, /\/otp/],
  authenticated: [/\/dashboard/, /\/invest/, /\/profile/],
}

export function middleware(req: NextRequest) {
  let token = req.cookies.get('token')
  const path = req.nextUrl.pathname

  const matchPath = (pathList: RegExp[]) => {
    return pathList.some((pattern) => pattern.test(path))
  }
  if (token && matchPath(pathType.unAuthenticated)) {
    const url = req.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }
  if (!token && matchPath(pathType.authenticated)) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}

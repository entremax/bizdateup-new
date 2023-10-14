// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(request)
  return NextResponse.redirect(new URL('/dashboard', request.url))
}

// See "Matching Paths" in [^1^][1] to learn more
export const config = {
  matcher: '/about/:path*',
}

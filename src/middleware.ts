import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const selfRequest = request.headers.get('X-Custom-Header') === 'self-request'
  if (!selfRequest && request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/api/:path*'],
}

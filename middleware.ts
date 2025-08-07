import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Örnek: Tüm isteklerde console.log yap
  console.log(`Request URL: ${request.url}`);
  return NextResponse.next();
}

// Middleware hangi yolları etkiler, burada tüm yolları belirtebilirsin
export const config = {
  matcher: '/:path*',
};

import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'zh'];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
});

export default function middleware(request: any) {
  return intlMiddleware(request);
}

export const config = {
  // 匹配所有路径
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};

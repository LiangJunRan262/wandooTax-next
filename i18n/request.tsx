import { getRequestConfig } from 'next-intl/server';

import { getUserLocale } from './service'

export default getRequestConfig(async (params: {locale: string}) => {
  const locale = await getUserLocale();
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

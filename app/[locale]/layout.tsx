import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import '../globals.css'
import Header from "@/app/component/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WandooTax CPA accounting group-Personal | Business | Corporation",
  description: "Our CPA team offers reliable tax preperation and filling for individuals, small business, and self-employed professionals in Toronto and Windsor. We help you maximize your deductions and credits, ensuring you pay the least amount possible. Contact us today for stress-free filing and expert advice.",
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  console.log('locale', locale);

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
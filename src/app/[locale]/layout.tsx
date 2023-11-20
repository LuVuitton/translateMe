import { NextIntlClientProvider } from "next-intl";

import "../../style/globals.scss";
import s from "../../style/rootLayout.module.scss";
import type { Metadata } from "next";
import { TheHeader } from "@/components/clientComponents/header/TheHeader";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { notFound } from "next/navigation";


export const metadata: Metadata = {
  title: "NEAR",
  description: "near",
};

const locales = ['en', 'ru'];


export default async function RootLayout({
  children,
  params: { locale },
}: Props) {



  let messages;
  try {
    messages = (await import(`../../../locales/${locale}.json`)).default;

  } catch (error) {
    notFound()
    // console.log('error');
    
  }


  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <TheHeader currentLanguage={locale} />
            <div className={s.mainContent}>{children}</div>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

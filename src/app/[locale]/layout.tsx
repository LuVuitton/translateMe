import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import s from "./mainContent.module.scss";
import type { Metadata } from "next";
import { NotFound } from "./NotFound/NotFound";
import { TheHeader } from "@/components/header/TheHeader";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/ReduxProvider";

// export function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "ua" }];
// }

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEAR",
  description: "near",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../../locales/${locale}.json`)).default;
  } catch (error) {
    NotFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
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

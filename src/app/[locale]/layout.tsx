/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "../globals.css";
import { ModalProvider } from "@/components/context/ContextModal";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ModalProvider>
            <Header />
            {children}
            <Footer />
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

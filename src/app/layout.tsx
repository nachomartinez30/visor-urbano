import { ModalProvider } from "@/components/context/ContextModal";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locale = await getLocale();
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

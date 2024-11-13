"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";
import { ModalProvider } from "@/components/context/ContextModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="antialiased">
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}

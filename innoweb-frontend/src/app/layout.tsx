import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innoweb.uz - Raqamli Yechimlar",
  description: "Veb-saytlar, Telegram botlar va biznesni avtomatlashtirish.",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Innoweb.uz',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Innoweb.uz',
    title: 'Innoweb.uz - Raqamli Yechimlar',
    description: 'Veb-saytlar, Telegram botlar va biznesni avtomatlashtirish.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innoweb.uz - Raqamli Yechimlar',
    description: 'Veb-saytlar, Telegram botlar va biznesni avtomatlashtirish.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="container mx-auto flex-1 p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

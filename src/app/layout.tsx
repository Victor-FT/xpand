import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
// Importação da onte Inter
import { Inter } from 'next/font/google';

// Configuração da fonte Inter
const inter = Inter({
  subsets: ['latin'], // Defina os subsets conforme necessário
  variable: '--font-inter', // Nome da variável CSS para a fonte
});

export const metadata: Metadata = {
  title: {
    default: "xPand",
    template: `%s | xPand`,
  },
  description: "xPand",
  openGraph: {
    title: `xPand`,
    description: 'xPand',
    url: "xPand",
    siteName: `xPand`,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `xPand`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

const fontSans = inter;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-inter antialiased mx-auto pt-0 sm:pt-0 overflow-x-hidden w-[100vw] max-w-[100vw]",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}


import type { Metadata } from "next";

import "./globals.css";




export const metadata: Metadata = {
  title: "Başvuru Değerlendirme Demo",
  description: "Başvuru Değerlendirme Ekranları Tasarım ve Fonksiyonalite Testleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}

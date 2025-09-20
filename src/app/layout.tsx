import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "CutLink | URL shortener",
  description: "short your links/url quickly in cutlink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/cutlink-icon.ico" />
      </head>
      <body>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

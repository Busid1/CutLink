import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

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
        <link rel="shortcut icon"
          href="/images/cutlink-icon.ico" />
        <Script src="https://kit.fontawesome.com/ae5f71a2c9.js" crossOrigin="anonymous" strategy="beforeInteractive"></Script>      
      </head>
      <body
      >
        <section id="section">
          <NavBar />
          {children}
          <Analytics/>
        </section>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar";

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
      >
        <div className="h-screen">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
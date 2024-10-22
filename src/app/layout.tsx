import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CutLink",
  description: "short your links/url quickly in cutlink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-slate-950"
      >
        {children}
      </body>
    </html>
  );
}

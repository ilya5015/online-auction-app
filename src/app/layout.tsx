import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auction app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"main"}>{children}</body>
    </html>
  );
}

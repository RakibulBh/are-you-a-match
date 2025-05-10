import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins, playfair } from "./fonts";

export const metadata: Metadata = {
  title: "Are You a Match? | Find Your Perfect Partner",
  description:
    "Discover compatibility with potential partners through our advanced matching algorithm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}

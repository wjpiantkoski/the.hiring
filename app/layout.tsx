import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavigationBar from "./_components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | the.hiring",
    default: "the.hiring",
  },
  description: "Manage your hiring process with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavigationBar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

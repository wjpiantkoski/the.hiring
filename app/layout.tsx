import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavigationBar from "./_components/@shared/NavigationBar";
import useServerDarkMode from "./_hooks/use-server-dark-mode";

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
  const theme = useServerDarkMode();

  return (
    <html lang="en" className={theme}>
      <body
        className={`${inter.className} antialiased min-h-screen grid grid-rows-3`}
      >
        <NavigationBar />
        <main className="p-4 pt-20 row-span-3">{children}</main>
      </body>
    </html>
  );
}

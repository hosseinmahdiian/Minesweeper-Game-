import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/layout/layout";

export const metadata: Metadata = {
  title: "Minesweeper Game",
  description: "web Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased  h-screen `}>
        <Layout>
          {children}
          <Toaster />
        </Layout>
      </body>
    </html>
  );
}

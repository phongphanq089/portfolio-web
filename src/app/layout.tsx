import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Providers } from "@/layout/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexGenDev | FrontEnd Developer",
  description: "Next Generation Developer || Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <main className=" flex flex-col min-h-screen relative overflow-hidden">
            <div className="flex-grow flex-1 mt-[20px]">{children}</div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

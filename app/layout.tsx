import "./globals.css";

import { Montserrat } from "next/font/google";
import Header from "./app-header";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  preload: true,
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable}>
      <body className="bg-zinc-900 h-screen">
        <main className="mx-auto md:max-w-3xl px-4 sm:px-6 lg:px-0">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

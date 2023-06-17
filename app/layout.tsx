import "./globals.css";

import { Montserrat } from "next/font/google";
import Header from "./app-header";
import LayoutCanvas from "./layout-canvas";

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
        <LayoutCanvas />
        <main className="relative">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

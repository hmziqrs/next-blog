import "./globals.css";
import CustomHead from "./head";

import { Montserrat } from "@next/font/google";

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
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";

import { Montserrat } from "next/font/google";
import Header from "components/header";
import MatrixCanvas from "components/matrix-canvas";
import Footer from "./components/footer";

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
        <MatrixCanvas />
        <main className="relative min-h-screen">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

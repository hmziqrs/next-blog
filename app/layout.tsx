import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "store/theme";
import "./globals.css";
import CustomHead from "./head";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <ThemeProvider>
      <Content>{children}</Content>
    </ThemeProvider>
  );
}

function Content({ children }: Props) {
  const ctx = useContext(ThemeContext);
  console.log("ctx", ctx);
  console.log("CONTENT");

  return (
    <html lang="en" className="light">
      <body className=" dark:bg-neutral-800 bg-white">{children}</body>
    </html>
  );
}

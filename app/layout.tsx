import "../style/_globals.scss";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Footer from "./Footer";

const inter = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Nasiri",
  viewport: "idth=device-width, initial-scale=1.0, viewport-fit=cover",

  // description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

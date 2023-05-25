import "./globals.css";
import "./scss/main.scss";
import { Inter, Press_Start_2P, Black_Ops_One } from "next/font/google";

import Footer from "./footer";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });
const black = Black_Ops_One({ weight: "400", subsets: ["latin"] });
const press = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Beamo",
  description: "Beamo Game Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={press.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

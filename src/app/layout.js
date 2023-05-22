// Stlye
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/main.css";

// Component Import
import Nav from "./navBar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";

// Font
import { Inter, Black_Ops_One, Press_Start_2P } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const black = Black_Ops_One({ subsets: ["latin"], weight: "400" });
const press = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Beamo",
  description: "Beamo Game Studio",
};

function mainPage() {
  return (
    <>
      <Nav />
      <About />
      <Service />
      <Contact />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {mainPage()}
        {children}
      </body>
    </html>
  );
}

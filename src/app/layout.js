// Stlye
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/main.css";

// Component Import
import Nav from "./navBar";
import About from "./pages/about";
import Contact from "./pages/contact";

// Font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beamo",
  description: "Beamo Game Studio",
};

function mainPage() {
  return (
    <>
      <Nav />
      <About />
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

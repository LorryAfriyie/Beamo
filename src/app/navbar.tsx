"use client";

import Link from "next/link";
import { useEffect } from "react";

// Navigation Bar
export default function Navbar() {
  useEffect(() => {
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  }, []);

  return (
    <nav className="navigation-bar shadow-lg">
      <div>
        <Link href={"#"} className="logo">
          Beamo
        </Link>
      </div>
      <a href="#" className="toggle-button">
        <span className="hamburger-button"></span>
        <span className="hamburger-button"></span>
        <span className="hamburger-button"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/service"}>Services</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/games"}>Games</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

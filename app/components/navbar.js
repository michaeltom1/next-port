"use client";
import Link from "next/link";
import { navItems } from "../constant/data";
import { useEffect, useState } from "react";

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
      // if (typeof window === "undefined") return;
      function toggleNav() {
        const currentValue = window.scrollY;
        if (currentValue > lastScroll && currentValue > 100) {
          setIsVisible(false);
        } else if (currentValue < lastScroll) {
          setIsVisible(true);
        }
        setLastScroll(currentValue);
      }
      window.addEventListener("scroll", toggleNav);

      return () => removeEventListener("scroll", toggleNav);
    }, [lastScroll]);
  return (
    <header className={`${isVisible ? "show-nav" : "hide-nav"}`}>
      <nav>
        <div>MichaelTom</div>
        <div>
          <ul>
            {navItems.map((item) => (
              <li key={item.id} className="nav-links">
                <Link href={item.path}>{item.pathName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

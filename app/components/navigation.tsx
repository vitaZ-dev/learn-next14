"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navStyle from "../../styles/nav.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={navStyle.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🙌" : ""}
        </li>
        <li>
          <Link href="/about">About</Link>
          {path === "/about" ? "🙌" : ""}
        </li>
      </ul>
    </nav>
  );
}

import { useState } from "react";
import { Sacramento } from "@next/font/google";
import Link from "next/link";
import style from "../styles/Navbar.module.css";

const sacramento = Sacramento({
  subsets: ["latin"],
  display: "optional",
  weight: "400",
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Github",
      href: "https://github.com/Aman7080",
      external: true,
    },
  ];

  return (
    <header className="mt-10">
      <div className="flex justify-around items-center ">
        <div className={sacramento.className}>
          <span
            className="font-bold text-3xl md:text-5xl"
            style={{ color: "rgb(var( --extra-color-rgb))" }}
          >
            Aman Kumar.
          </span>
        </div>
        <div className=" -mt-8">
          <button
            className={style.mobileNavButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className=" sr-only">Menu</span>
            <div>
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
        <nav>
          <ol data-visible={isMenuOpen} className={style.primaryMenu}>
            {menu.map((item, key) => (
              <li key={Math.random()}>
                <span aria-hidden="true"> 0{key}. </span>
                {item?.external ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {" "}
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}

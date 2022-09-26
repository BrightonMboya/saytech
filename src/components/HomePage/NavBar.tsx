import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ClientOnlyPortal from "./ClientOnlyPortal";

const NavBar = () => {
  const router = useRouter();
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => setShowNavBar(!showNavBar);
  const activeLink = "text-orange font-medium";
  return (
    <div>
      <div className="absolute right-2 cursor-pointer">
        {showNavBar ? (
          ""
        ) : (
          <FaBars size={25} fill="#fff" onClick={handleShowNavBar} />
        )}

        {showNavBar && (
          <ClientOnlyPortal selector="#modal">
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.8)]">
              <nav className="font-montserrat w-full text-white absolute top-[10%] right-[10%] bottom-[10%] left-[10%]">
                <div className="absolute right-[20%]">
                  <FaTimes size={25} fill="#fff" onClick={handleShowNavBar} />
                </div>
                <ul className="mt-[3rem] flex flex-col items-center gap-[2rem] ">
                  <Link href="/">
                    <li className={router.pathname == "/" ? activeLink : ""}>
                      Home
                    </li>
                  </Link>

                  <Link href="/about">
                    <li
                      className={router.pathname == "/about" ? activeLink : ""}
                    >
                      About
                    </li>
                  </Link>

                  <Link href="/services">
                    <li
                      className={
                        router.pathname == "/services" ? activeLink : ""
                      }
                    >
                      Our Services
                    </li>
                  </Link>

                  <Link href="/furnitures">
                    <li
                      className={
                        router.pathname == "/furnitures" ? activeLink : ""
                      }
                    >
                      Saytech Furnitures
                    </li>
                  </Link>

                  <Link href="/saytechInteriors">
                    <li
                      className={
                        router.pathname == "/saytechInteriors" ? activeLink : ""
                      }
                    >
                      Saytech Interiors
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>
          </ClientOnlyPortal>
        )}
      </div>
    </div>
  );
};

export default NavBar;

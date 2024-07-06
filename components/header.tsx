"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

// components
import Logo from "./ui/Logo/Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


// Shared
import { HeaderProps } from "@/shared/interfaces/components.interface";

const Header: React.FC<HeaderProps> = ({ }) => {


  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <header
      className={twMerge(
        `sticky top-0 z-30 h-[66px] w-full rounded-bl-[15px] rounded-br-[15px] text-white-color bg-black-color-900   ${header ? "bg-transparent bg-black-color-900  shadow-lg" : "relative"
        }`,
      )}
    >
      {header ? (
        <>
          {/* Header scrolled */}
          <div className={`mx-10 flex h-full items-center justify-between`}>
            <div className="flex items-start justify-start">
              <Logo width={60} height={20} light />
            </div>

            <div className="flex items-center">
              {/* NAV */}
              <div className={`hidden lg:flex`}>
                <Nav slug={""} />
              </div>
              {/* MobileNav */}
              <div className="px-10 lg:hidden">
                <MobileNav />
              </div>
            </div>
            <div className="hidden lg:flex border border-primary-color-500 hover:bg-primary-color-500 decoration decoration-8 rounded-2xl px-2">
              <button>Log Out</button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Header not scrolled */}
          <div className={`mx-10 flex h-full items-center justify-between`}>
            <div className="flex items-start justify-start">
              <Logo width={60} height={20} light />
            </div>

            <div className="flex items-center">
              {/* NAV */}
              <div className={`hidden lg:flex`}>
                <Nav slug={""} />
              </div>
              {/* MobileNav */}
              <div className="px-10 lg:hidden">
                <MobileNav />
              </div>
            </div>
            <div className="hidden lg:flex border border-primary-color-500 hover:bg-primary-color-500 decoration decoration-8 rounded-2xl px-2">
              <button>Log Out</button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Header

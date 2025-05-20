"use client";
import { sidebarLinks } from "@/constants";
import { SearchCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";

const LeftSideBar = ({user} : SiderbarProps) => {
  const pathname = usePathname();

  return (
<div className="flex flex-col w-20 md:w-[280px] min-h-lvh p-4 bg-white shadow-md transition-all duration-300">
  {/* Top section: Logo, Search, Links */}
  <div className="flex flex-col gap-6 flex-grow">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <Image
        width={35}
        height={35}
        alt="logo"
        src="/icons/logo.svg"
        className="inline-block"
      />
      <h3 className="px-3 text-xl font-bold">Bankawy</h3>
    </div>

    {/* Search */}
    <div className="hidden md:flex items-center border border-gray-300 rounded-xl px-3 py-2 w-full max-w-sm bg-white">
      <SearchCheck className="text-gray-500 w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="outline-none w-full text-sm text-gray-700 bg-transparent"
      />
    </div>

    {/* Navigation Links */}
    <nav className="flex flex-col gap-4">
      {sidebarLinks.map((link) => {
        const isActive =
          pathname === link.route || pathname.startsWith(`${link.route}/`);

        return (
          <Link
            key={link.label}
            href={link.route}
            className={`flex items-center gap-2 p-2 rounded-lg transition cursor-pointer ${
              isActive ? "bg-sky-700 text-white" : "hover:bg-sky-100"
            }`}
          >
            <Image
              alt={link.label}
              src={link.imgURL}
              height={30}
              width={30}
              className="shrink-0"
              style={{
                filter: isActive ? "brightness(3) invert(0)" : "none",
              }}
            />
            <h3
              className={`text-sm font-medium ${
                isActive ? "text-white" : "text-gray-800"
              }`}
            >
              {link.label}
            </h3>
          </Link>
        );
      })}
      <PlaidLink user={user} />
    </nav>
  </div>

  {/* Footer at bottom */}
  <Footer user={user} type="desktop" />
</div>


  );
};

export default LeftSideBar;

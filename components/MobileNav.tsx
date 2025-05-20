"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { DialogTitle } from "@radix-ui/react-dialog";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/icons/hamburger.svg"
          width={30}
          height={30}
          alt="menu"
          className="cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-white flex-col justify-between"
      >
          <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>

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
                  className="shrink-0 mx-2"
                  style={{
                    filter: isActive ? "brightness(3) invert(0)" : "none",
                  }}
                />
                <h3
                  className={`text-lg  font-bold px-2 ${
                    isActive ? "text-white" : "text-gray-800"
                  }`}
                >
                  {link.label}
                </h3>
              </Link>
            );
          })}
        </nav>
        <Footer user={user} type="mobile" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

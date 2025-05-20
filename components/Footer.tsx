"use client";
import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import React from "react";

const Footer = ({ user, type }: FooterProps) => {
  const handleLogOut = async () => {
     await logoutAccount();
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-grey-700 font-semibold">
          {user?.firstName[0]}
        </p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate  font-semibold text-gray-700">
          {" "}
          {user?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogOut}>
        <Image src={"/icons/logout.svg"} alt="logout" height={35} width={35} />
      </div>
    </footer>
  );
};

export default Footer;

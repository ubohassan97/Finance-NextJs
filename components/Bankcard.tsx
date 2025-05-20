import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bankcard = ({ account, userName, showBalance = true }: CreditCardProps) => {

  return (
    <div className="flex -flex-col">
      <Link href={`/transaction-history/?id=${account?.appwriteItemId}`} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">{account?.name}</h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {account?.currentBalance.toFixed(2)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h1 className="text-12 font-semibold text-white">●●/●●</h1>
            </div>
            <p className="text-14 font-semibold  text-white">
              {" "}
              ●●●● ●●●● ●●●●	
              <span className="text-16 ">
                    1234
              </span>
            </p>
          </article>
       
        </div>
           <div className="bank-card_icon">
            <Image  src="/icons/paypass.svg"   width={20} height={24} alt="pay"/>
            <Image src="/icons/mastercard.svg" width={24} height={32} alt="mastercard" />

          </div>
          <Image src="/icons/lines.svg" width={316} height={190} alt="line"  className="absolute top-0 left-0"/>
      </Link>
    </div>
  );
};

export default Bankcard;

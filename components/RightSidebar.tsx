import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import Bankcard from "./Bankcard";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const RightSidebar = async ({
  user,
  transactions,
  banks,
}: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="h-[120px] w-full bg-[url('/icons/gradient-mesh.svg')] bg-cover bg-no-repeat" />

        <div className="relative flex px-6 max-xl:justify-center">
          <div className="flex items-center justify-center absolute -top-8 w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-8 border-white p-2 shadow-md">
            <span className="text-4xl font-extrabold text-sky-600">
              {user.firstName.slice(0, 2).toUpperCase()}
            </span>
          </div>

          <div className="flex flex-col pt-24">
            <h1 className="text-xl font-semibold">
              {user.firstName}
              {user.lastName}
            </h1>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className="flex flex-col mx-2">
        <div className="flex justify-between items-center text-gray-700">
          <h1>My Banks</h1>
          <Link href="/" className="flex flex-row cursor-pointer">
            <Plus />
            <p>add More</p>
          </Link>
        </div>
        <div className="text-black mt-20 px-10">
          {banks.length > 0 && (
            <div className="relative">
              <div className="z-20">
                 <Bankcard 
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
              </div>
              {banks[1] && (
                  <div className="absolute right-0 top-8 z-0 w-[90%]">
                <Bankcard 
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
              )}
            </div>
          )}
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;

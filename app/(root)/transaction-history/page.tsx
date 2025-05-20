import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { TextSelect } from "lucide-react";
import React from "react";

const transictionsHistort = async ({ searchParams: { id, page } }: SearchParamProps) => {

   const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser();
    // console.log('Logged in user:', loggedIn);
    
    const accounts = await getAccounts({ 
      userId: loggedIn.$id 
    })
  
    if(!accounts) return;
    
    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  
    const account = await getAccount({ appwriteItemId })
console.log(accounts)
  return (
    <section className="flex flex-col m-10">
      <div className="flex justify-between items-center m-5">
        <div>
          <h1 className="text-3xl font-semibold"> transictions History</h1>
          <p className="text-gray-500">
            gain insights and track yout transactions over time
          </p>
        </div>

        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <TextSelect color="blue" size={28} />{" "}
              <SelectValue placeholder="Select Bank" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md rounded-md">
              <SelectItem
                className="hover:bg-blue-100 data-[state=checked]:bg-blue-200 cursor-pointer"
                value="bank1"
              >
                Bank 1
              </SelectItem>
              <SelectItem
                className="hover:bg-blue-100 data-[state=checked]:bg-blue-200 cursor-pointer"
                value="bank2"
              >
                Bank 2
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-between bg-sky-600 p-4 rounded-xl">
        <div className=" w-full">
          <h1 className="text-white font-semibold text-2xl">{accounts?.data[0].name}</h1>
          <p className="text-white py-2">{accounts?.data[0].officialName}</p>
          <p className="text-white py-2">**** **** **** {accounts?.data[0].mask}</p>
        </div>
        <div className="bg-sky-100/50 w-fit p-3 flex flex-col justify-center items-center rounded-2xl">
          <p className=" text-white w-fit whitespace-nowrap">Current balance</p>
          <p className="text-white text-xl font-semibold">${accounts?.data[0].currentBalance}</p>
        </div>
      </div>
    </section>
  );
};

export default transictionsHistort;

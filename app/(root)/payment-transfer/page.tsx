import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const PaymentTransfer = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) return <div>Not logged in</div>;

  const accounts = await getAccounts({ userId: loggedIn.$id });
  if (!accounts || !accounts.data || accounts.data.length === 0) return <div>No accounts found</div>;

  const accountsData = accounts.data;
  const appwriteItemId = accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  console.log(account);

  return <div>payment</div>;
};

export default PaymentTransfer;

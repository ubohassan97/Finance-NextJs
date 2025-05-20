
import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import HeaderChart from "./HeaderChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* chart by using chart.js */}
        <HeaderChart accounts={accounts}/>
        
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="header-2">totalCurrentBalance &nbsp; {totalBanks}</h3>
        <p className="total-balancr-label"> total Current Balance</p>
        <div className="total-balance-amount ">
            <AnimatedCounter amount={totalCurrentBalance} />
            
        </div>
      </div>
      <div className="flex flex-row">
        <p>+</p>
        <p>add more</p>

      </div>
    </section>
  );
};

export default TotalBalanceBox;

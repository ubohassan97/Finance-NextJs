"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProp {
  accounts: Account[];
}

const HeaderChart = ({ accounts }: DoughnutChartProp) => {
      const accountNames =accounts.map((e)=> e.name)
      const balance = accounts.map((e)=>e.currentBalance)

  const data = {
    
    datasets: [
      {
        label: "banks",
        data: balance,
        backgroundColor: ["#0747b6", "#2265d4", "#2f91fa"],
      },
    ],
    labels:accountNames,
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default HeaderChart;

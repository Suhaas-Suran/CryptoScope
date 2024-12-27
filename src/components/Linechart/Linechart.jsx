import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const Linechart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (historicalData?.prices?.length) {
      const formattedData = historicalData.prices.map(([timestamp, price]) => [
        new Date(timestamp).toLocaleDateString(undefined, { month: "short", day: "numeric" }), // Format as "MMM DD"
        price,
      ]);
  
      setData([["Date", "Prices"], ...formattedData]);
    }
  }, [historicalData]);
  

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      legendToggle
      options={{
        hAxis: { title: "Date" },
        vAxis: { title: "Prices" },
        legend: { position: "top-right" },
      }}
    />
  );
};

export default Linechart;

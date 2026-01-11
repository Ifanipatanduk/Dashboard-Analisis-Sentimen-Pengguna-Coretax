import { useState, useEffect } from "react";
import useData from "./data.jsx";

const orderedMonths = ["01","02","03","04","05","06","07","08"];

export default function useBarData() {
  const tweets = useData();
  const [barData, setBarData] = useState({
    labels: orderedMonths,
    datasets: []
  });

  useEffect(() => {
    if (tweets.length === 0) return;

    const monthCounts = tweets.reduce((acc, t) => {
      const key = Object.keys(t).find(k => k.includes("tanggal"));
      const month = t[key]?.split("/")[1];
      if (orderedMonths.includes(month)) {
        acc[month] = (acc[month] || 0) + 1;
      }
      return acc;
    }, {});

    setBarData({
      labels: orderedMonths,
      datasets: [{
        label: "Jumlah Tweet",
        data: orderedMonths.map(m => monthCounts[m] || 0),
        backgroundColor: "#2196F3"
      }]
    });
  }, [tweets]);

  return barData;
}

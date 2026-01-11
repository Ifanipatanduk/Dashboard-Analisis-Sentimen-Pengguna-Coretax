import React, { useState } from "react";
import useData from "./data.jsx";
import { Bar } from "react-chartjs-2";

const orderedMonths = ["01","02","03","04","05","06","07","08"];
const monthMap = {
  "01": "Januari",
  "02": "Februari",
  "03": "Maret",
  "04": "April",
  "05": "Mei",
  "06": "Juni",
  "07": "Juli",
  "08": "Agustus"
};

const downtimeConfig = {
  "01": [["2025-01-16", "2025-01-17"], ["2025-01-20", "2025-01-21"]],
  "02": [["2025-02-11", "2025-02-11"], ["2025-02-24", "2025-02-25"]],
  "04": [["2025-04-01", "2025-04-02"]],
  "05": [["2025-05-18", "2025-05-18"]],
  "06": [["2025-06-13", "2025-06-14"], ["2025-06-21", "2025-06-21"]],
  "07": [["2025-07-12", "2025-07-13"]]
};

const getPeriode = (dateStr, month) => {
  if (!dateStr) return null;
  const [d,m,y] = dateStr.split("/");
  const date = new Date(`${y}-${m}-${d}`);
  const downtimes = downtimeConfig[month] || [];

  for (const [start, end] of downtimes) {
    if (date >= new Date(start) && date <= new Date(end)) return "Downtime";
  }

  if (downtimes.length > 0) {
    return date < new Date(downtimes[0][0])
      ? "Sebelum Downtime"
      : "Setelah Downtime";
  }

  return null;
};

function DowntimeCard() {
  const tweets = useData();
  const [downtimeMonth, setDowntimeMonth] = useState("07");

  const downtimeTweets = tweets.filter(t => {
    const key = Object.keys(t).find(k => k.includes("tanggal"));
    return t[key]?.split("/")[1] === downtimeMonth;
  });

  const periodeSentimen = downtimeTweets.reduce((acc, t) => {
    const key = Object.keys(t).find(k => k.includes("tanggal"));
    const periode = getPeriode(t[key], downtimeMonth);
    if (!periode || !t.label_sentiment) return acc;
    if (!acc[periode]) acc[periode] = { positive: 0, negative: 0, neutral: 0 };
    acc[periode][t.label_sentiment]++;
    return acc;
  }, {});

  const downtimeBarData = {
    labels: ["Sebelum Downtime","Downtime","Setelah Downtime"],
    datasets: [
      {
        label: "Positif",
        data: ["Sebelum Downtime","Downtime","Setelah Downtime"].map(
          p => periodeSentimen[p]?.positive || 0
        ),
        backgroundColor: "#198754"
      },
      {
        label: "Negatif",
        data: ["Sebelum Downtime","Downtime","Setelah Downtime"].map(
          p => periodeSentimen[p]?.negative || 0
        ),
        backgroundColor: "#dc3545"
      },
      {
        label: "Netral",
        data: ["Sebelum Downtime","Downtime","Setelah Downtime"].map(
          p => periodeSentimen[p]?.neutral || 0
        ),
        backgroundColor: "#f9ca3e"
      }
    ]
  };

  return (
    <div className="col-md-7 mt-4">
      <div className="card p-3 shadow-sm">
        <label className="fw-semibold mb-2">Pilih Bulan Downtime</label>
        <select
          className="form-select mb-3"
          value={downtimeMonth}
          onChange={e => setDowntimeMonth(e.target.value)}
        >
          {orderedMonths.map(m => (
            <option key={m} value={m}>{monthMap[m]}</option>
          ))}
        </select>

        <p className="fw-bold text-center">
          Perbandingan Sentimen Sebelum, Saat, dan Setelah Downtime
          ({monthMap[downtimeMonth]})
        </p>

        <Bar data={downtimeBarData} />
      </div>
    </div>
  );
}

export default DowntimeCard;

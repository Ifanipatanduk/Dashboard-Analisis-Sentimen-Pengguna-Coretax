import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Grafik = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    Papa.parse("/Labeling sentimen model Aardiiiiyyy(Desember-fix).csv", {
      header: true,
      skipEmptyLines: true,
      download: true,
      complete: (results) => {
        const cleanData = results.data.map(row => {
          const newRow = {};
          Object.keys(row).forEach(k => {
            const key = k.replace(/^\uFEFF/, "").trim().toLowerCase();
            let val = row[k]?.trim();

            if (key === "label_sentiment" && val) {
              val = val.toLowerCase();
              if (val === "positif") val = "positive";
              if (val === "negatif") val = "negative";
              if (val === "netral") val = "neutral";
            }

            newRow[key] = val;
          });
          return newRow;
        });

        setTweets(cleanData);
      }
    });
  }, []);


  // distribusi sentimen pengguna
  const sentimentCounts = tweets.reduce((acc, t) => {
    if (t.label_sentiment) {
      acc[t.label_sentiment] = (acc[t.label_sentiment] || 0) + 1;
    }
    return acc;
  }, {});

  const pieData = {
    labels: ["Positif", "Negatif", "Netral"],
    datasets: [
      {
        data: [
          sentimentCounts.positive || 0,
          sentimentCounts.negative || 0,
          sentimentCounts.neutral || 0
        ],
        backgroundColor: ["#198754", "#dc3545", "#f9ca3e"]
      }
    ]
  };

  // Data jumlah sentimen pengguna setiap periode
  const monthCounts = tweets.reduce((acc, t) => {
    const tanggalKey = Object.keys(t).find(k => k.includes("tanggal"));
    const tanggal = t[tanggalKey];

    if (!tanggal) {
      acc["unknown"] = (acc["unknown"] || 0) + 1;
      return acc;
    }

    const parts = tanggal.split("/");
    if (parts.length !== 3) {
      acc["unknown"] = (acc["unknown"] || 0) + 1;
      return acc;
    }

    const month = parts[1].padStart(2, "0");
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const monthMap = {
    "01": "Januari",
    "02": "Februari",
    "03": "Maret",
    "04": "April",
    "05": "Mei",
    "06": "Juni",
    "07": "Juli",
    "08": "Agustus",
    "09": "September",
    "10": "Oktober",
    "11": "November",
    "12": "Desember"
  };

  const sortedMonths = Object.keys(monthCounts)
    .filter(m => m !== "unknown")
    .sort();

  const barData = {
    labels: sortedMonths.map(m => monthMap[m]),
    datasets: [
      {
        label: "Jumlah Tweet",
        data: sortedMonths.map(m => monthCounts[m]),
        backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#E91E63', '#00BCD4', '#8BC34A', '#FFC107', '#FF5722', '#3F51B5', '#009688', '#CDDC39']
      }
    ]
  };

  return (
    <div className="row gx-3">
      <div className="col-md-5">
        <div className="card shadow-sm p-3 h-100">
          <p className="fw-bold text-center">
            Distribusi Sentimen Pengguna
          </p>
          <div style={{ height: "300px" }}>
            <Pie
              data={pieData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
  
      <div className="col-md-7">
        <div className="card shadow-sm p-3 h-100">
          <p className="fw-bold text-center">
            Tweet pengguna setiap bulan
          </p>
          <div style={{ height: "300px" }}>
            <Bar
              data={barData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>

      <div className="col-md-5 mt-4"> 
        <div className="card shadow-sm p-3 w-[300px]">
          <p className="fw-bold text-center text-lg mb-3">Kata Kunci Setiap Periode</p>
          <div className="overflow-x-auto overflow-y-auto" style={{ height: "300px", width: "100%" }}>
            <table className="border border-gray-300 border-collapse" style={{ width: "100%" }}>
              <thead className="bg-gray-100">
                <tr className="text-center">
                  <th className="border border-gray-300 p-2">Bulan</th>
                  <th className="border border-gray-300 p-2">Kata Kunci</th>
                  <th className="border border-gray-300 p-2">Frekuensi</th>
                </tr>
              </thead>
              <tbody>
                {/* data januari */}
                <tr>
                  <td className="border border-gray-300 p-2 text-center" rowSpan={3}>Januari</td>
                  <td className="border border-gray-300 p-2">Coretax</td>
                  <td className="border border-gray-300 p-2">15</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">SPT</td>
                  <td className="border border-gray-300 p-2">10</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Pajak</td>
                  <td className="border border-gray-300 p-2">8</td>
                </tr>

                 {/* data februari */}
                 <tr>
                  <td className="border border-gray-300 p-2 text-center" rowSpan={3}>Februari</td>
                  <td className="border border-gray-300 p-2">Coretax</td>
                  <td className="border border-gray-300 p-2">465</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Pajak</td>
                  <td className="border border-gray-300 p-2">136</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Admin</td>
                  <td className="border border-gray-300 p-2">61</td>
                </tr>

                {/* data maret */}
                <tr>
                  <td className="border border-gray-300 p-2 text-center" rowSpan={3}>Maret</td>
                  <td className="border border-gray-300 p-2">Coretax</td>
                  <td className="border border-gray-300 p-2">77</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Pajak</td>
                  <td className="border border-gray-300 p-2">21</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Admin</td>
                  <td className="border border-gray-300 p-2">10</td>
                </tr>

                {/* data april */}
                <tr>
                  <td className="border border-gray-300 p-2 text-center" rowSpan={3}>April</td>
                  <td className="border border-gray-300 p-2">Coretax</td>
                  <td className="border border-gray-300 p-2">179</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Pajak</td>
                  <td className="border border-gray-300 p-2">64</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Admin</td>
                  <td className="border border-gray-300 p-2">38</td>
                </tr>

                 {/* data mei */}
                 <tr>
                  <td className="border border-gray-300 p-2 text-center" rowSpan={3}>Mei</td>
                  <td className="border border-gray-300 p-2">Coretax</td>
                  <td className="border border-gray-300 p-2">498</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Pajak</td>
                  <td className="border border-gray-300 p-2">255</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Silakan</td>
                  <td className="border border-gray-300 p-2">128</td>
                </tr>

                 {/* data juni */}
                 <tr>
                  <td className="border border-gray-300 p-2 text-center" rowSpan={3}>Juni</td>
                  <td className="border border-gray-300 p-2">Coretax</td>
                  <td className="border border-gray-300 p-2">341</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Pajak</td>
                  <td className="border border-gray-300 p-2">122</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Silakan</td>
                  <td className="border border-gray-300 p-2">96</td>
                </tr>

                {/* data juli */}
                <tr>
                  <td className="border border-gray-300 p-2 text-center" rowSpan={3}>Juli</td>
                  <td className="border border-gray-300 p-2">Coretax</td>
                  <td className="border border-gray-300 p-2">306</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Pajak</td>
                  <td className="border border-gray-300 p-2">144</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Akun</td>
                  <td className="border border-gray-300 p-2">48</td>
                </tr>

                {/* data Agustus */}
                <tr>
                  <td className="border border-gray-300 p-2 text-center " rowSpan={3}>Agustus</td>
                  <td className="border border-gray-300 p-2">Coretax</td>
                  <td className="border border-gray-300 p-2">310</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Pajak</td>
                  <td className="border border-gray-300 p-2">136</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Admin</td>
                  <td className="border border-gray-300 p-2">61</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  ); 
};

export default Grafik;

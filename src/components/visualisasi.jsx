import React, { useState } from "react";
import useData from "./data.jsx";
import useBarData from "./barChart.jsx";
import TabelKataKunci from "./tabelKataKunci.jsx";
import DowntimeCard from "./downtimenCard.jsx";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement} from "chart.js";

ChartJS.register( ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

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



const Visualisasi = () => {
  const tweets = useData();
  const barData = useBarData();
  const tabelKataKunci = TabelKataKunci();
  const downtimeCard = DowntimeCard();
  const [downtimeMonth, setDowntimeMonth] = useState("07");

  

  /* ===================== UI ===================== */
  return (
    <div className="row gx-3">

      <TabelKataKunci data={tabelKataKunci}/>    

      <div className="col-md-7 mt-4">
        <div className="card p-3 shadow-sm">
          <p className="fw-bold text-center">Jumlah Tweet per Bulan</p>
          <Bar data={barData} />
        </div>
      </div>

      <DowntimeCard data={downtimeCard}/>
    </div>
  );
};

export default Visualisasi;

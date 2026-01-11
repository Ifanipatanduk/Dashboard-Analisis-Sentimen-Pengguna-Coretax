import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Visualisasi from "../components/visualisasi.jsx";
import Card from "../components/card.jsx";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="container my-4">
        <div style={{ textAlign: "justify", lineHeight: "1.6" }}>
          <p>Data yang divisulalisasikan berdasarkan hasil penelitian yang dilakukan dari Periode Bulan Januari 2025 - Agustus 2026 dengan mengambil 
             data dari platform media sosial X (sebelumnya dikenal sebagai Twitter) yang berhubungan dengan Coretax. 
             Penelitian ini bertujuan untuk menganalisis sentimen pengguna terhadap Coretax, website perpajakan yang diluncurkan awal Januari.
          </p>
        </div>

        <div className="mb-4 mt-4">
          <Card />
          <Visualisasi/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

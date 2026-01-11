import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="border-bottom mb-4">
      <div className="container py-3 pt-5 ps-0">
        <h3 className="fw-bold d-flex align-items-center gap-1">
          Dashboard Analisis Sentimen Pengguna Coretax Pada Platform Media Sosial X  
        </h3>

        {/* <ul className="nav nav-tabs mt-3">
          <li className="nav-item">
            <button className="nav-link active">
              Tentang
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link">
             Data 
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link">
              Menu 3
            </button>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Header;

import React from "react";

 function TabelKataKunci() {
    return(
        <div className="col-md-5 mt-4"> 
        <div className="card shadow-sm p-3 w-[300px]">
          <p className="fw-bold text-center text-lg mb-3">Kata Kunci Setiap Periode</p>
          <div className="overflow-x-auto overflow-y-auto" style={{ height: "358px", width: "100%" }}>
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
    );
 }; 
 export default TabelKataKunci;
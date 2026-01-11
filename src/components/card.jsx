import React from "react";

function Card() {
  return (
    <div>
        <div className="row text-center mb-4">
            <div className="col-md-3">
            <div className="card shadow-sm">
                <div className="card-body">
                <h6>Total Tweet</h6>
                <h4>2.080</h4>
                </div>
            </div>
            </div>

            <div className="col-md-3">
            <div className="card shadow-sm">
                <div className="card-body text-danger">
                <h6>Negatif</h6>
                <h4>1320</h4>
                </div>
            </div>
            </div>

            <div className="col-md-3">
            <div className="card shadow-sm">
                <div className="card-body" style={{color: '#f9ca3e'}}>
                <h6>Netral</h6>
                <h4>957</h4>
                </div>
            </div>
            </div>

            <div className="col-md-3">
                <div className="card shadow-sm">
                    <div className="card-body text-success">
                    <h6>Positif</h6>
                    <h4>6</h4>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Card;

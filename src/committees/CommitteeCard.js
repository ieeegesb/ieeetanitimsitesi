import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

const CommitteeCard = ({ img, text, desc }) => {
  return (
    <div className="col col-lg-4">
        <div className="card h-100">
            <h2 className="card-title text-center">{text}</h2>
            <h6 className="text-center">{desc}</h6>

            <img
            className="p-3"
            src={img}
            alt=""
            />

            <button className="btn btn-primary ">{text}</button>
        </div>
    </div>
  )
}

export default CommitteeCard;
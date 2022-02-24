import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

const CommitteeCard = ({fullname, imgSrc, text}) => {
  return (
    <div className="col col-lg-4">
        <div className="card h-100">
            <h2 className="card-title text-center">{text}</h2>
            <h6 className="text-center">{fullname}</h6>

            <img
            className="p-3"
            src={imgSrc}
            alt={fullname}
            />

            <button className="btn btn-danger">{text}</button>
        </div>
    </div>
  )
}

export default CommitteeCard;
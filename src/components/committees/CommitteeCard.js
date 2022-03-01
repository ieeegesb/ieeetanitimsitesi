import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

const CommitteeCard = ({props}) => {
  return (
    <div className="col col-lg-4">
        <div className="card h-100">
            <h2 className="card-title text-center">{props.shortname}</h2>
            <h6 className="text-center">{props.fullname}</h6>


            <img src={props.logoGray} alt={props.shortname} />
            <a href={"/" + props.shortname.toLowerCase()} className="btn btn-primary">Go to Commitee Page</a>
           
          

            <button className="btn btn-danger">{props.fullname}</button>
        </div>
    </div>
  )
}

export default CommitteeCard;
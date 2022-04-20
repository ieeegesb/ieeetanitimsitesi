import React from 'react';
import "bootstrap/dist/css/bootstrap.css";



const CommitteeCard = ({ props }) => {
 
  return (
    <div className="col col-lg-4 deneme">
      <div className="card h-100">

        <h3>{props.fullname}</h3>
        <a href={"/" + props.shortname} ><img src={require(`../images/${props.shortname}Black.png`)} alt={props.shortname} className="deneme" width="175px" /></a>

      </div>
    </div>
  )
}

export default CommitteeCard;
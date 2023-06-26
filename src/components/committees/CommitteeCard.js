import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const CommitteeCard = ({ props }) => {
  return (
    <div className="col col-lg-4">
      <div className="card h-100 committee-card" >
        <a href={"/" + props.shortname} ><img src={require(`../../img/committees/${props.shortname.toLowerCase()}.png`)} alt={props.shortname} className="committee-img"  /></a>
      </div>
    </div>
  )
}

export default CommitteeCard;
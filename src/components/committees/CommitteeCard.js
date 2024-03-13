import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

const CommitteeCard = ({ props }) => {
  return (
    <div className="col col-lg-4">
      <div className="card h-100 committee-card" >
        <Link to={props.path} ><img src={require(`../../img/committees/${props.shortname.toLowerCase()}.png`)} alt={props.shortname} className="committee-img"  /></Link>
      </div>
    </div>
  )
}

export default CommitteeCard;
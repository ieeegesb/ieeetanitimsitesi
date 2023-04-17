import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const CommitteeCard = ({ props }) => {
  return (
    <div className="col col-lg-4 deneme">
      <div className="card h-100" style={{borderWidth:  2,  borderStyle:  'solid', borderColor: 'black' }}>

        <h3>{props.fullname}</h3>
        <a href={"/" + props.shortname} ><img src={require(`../images/${props.shortname.toLowerCase()}.png`)} alt={props.shortname} className="committee-img"  /></a>
      </div>
    </div>
  )
}

export default CommitteeCard;
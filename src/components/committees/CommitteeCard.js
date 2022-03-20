import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
// import csBlack from '.../src/images/csBlack.svg';
import CSLogo from '../images/cs.gray.svg';

const CommitteeCard = ({ props }) => {

  // console.log(props.logoBlack);
  return (
    <div className="col col-lg-4 deneme">
      <div className="card h-100">

        <h3>{props.fullname}</h3>
        <a href={"/" + props.shortname.toLowerCase()} ><img src={CSLogo} alt={props.shortname} className="deneme" /></a>





      </div>
    </div>
  )
}

export default CommitteeCard;
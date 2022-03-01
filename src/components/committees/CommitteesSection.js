import React from "react";
import CommitteeCard from "./CommitteeCard";
import "bootstrap/dist/css/bootstrap.css";
import committees from "./committees.json"

const CommitteesSection = () => {
  return (
    <React.Fragment>
      <div id="komitelerimiz">
        <div className="container cont">
          <div className="row justify-content-md-center p-3">
            <CommitteeCard props={committees.aess} />
            <CommitteeCard props={committees.cs} />
            <CommitteeCard props={committees.ea} />
          </div>

          <div className="row justify-content-md-center p-3">
            
            <CommitteeCard props={committees.edsoc} />
            <CommitteeCard props={committees.embs} />
            <CommitteeCard props={committees.enet} />
          </div>



          <div className="row justify-content-md-center p-3">
            <CommitteeCard props={committees.pes} />
            <CommitteeCard props={committees.ras} />
            <CommitteeCard props={committees.wie} />
          </div>

        ,
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommitteesSection;

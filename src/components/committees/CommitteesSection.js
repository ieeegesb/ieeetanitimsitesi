import React from "react";
import CommitteeCard from "./CommitteeCard";
import "bootstrap/dist/css/bootstrap.css";
import committees from "./committees.json"

const CommitteesSection = () => {
    return (
        <React.Fragment>
            <div id="komitelerimiz" className="container">
                <h1 >Komitelerimiz</h1>
                <div className="container cont">
                    <div className="row justify-content-md-center p-3">
                        <CommitteeCard props={committees.aess} />
                        <CommitteeCard props={committees.comsoc} />
                        <CommitteeCard props={committees.cs} />
                    </div>
                    <div className="row justify-content-md-center p-3">
                        <CommitteeCard props={committees.ea} />
                        <CommitteeCard props={committees.embs} />
                        <CommitteeCard props={committees.pes} />
                    </div>

                    <div className="row justify-content-md-center p-3">
                        <CommitteeCard props={committees.ras} />
                        <CommitteeCard props={committees.wie} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CommitteesSection;

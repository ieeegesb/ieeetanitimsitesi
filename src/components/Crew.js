import React from 'react';
import committees from "./committees/committees.json"
import CrewCard from "./CrewCard"
import "bootstrap/dist/css/bootstrap.css";

const Crew = () => {
    return (
        <div>
            
            <div id="ekibimiz" className="container">
                <div className="container cont">
                    {/* Yönetim Kurulu */}
                    <h2>Yönetim Kurulu</h2>
                    <hr />
                    <div className="row justify-content-md-center p-3">
                        <CrewCard props={committees.yk.baskan}/>
                        <CrewCard props={committees.yk.icisleri}/>
                        <CrewCard props={committees.yk.disisleri}/>
                        <CrewCard props={committees.yk.sayman}/>
                        <CrewCard props={committees.yk.sekreter}/>

                    </div>
                    {/* Denetim Kurulu */}
                    <h2>Denetim Kurulu</h2>
                    <hr />
                    <div className="row justify-content-md-center p-3">
                        <CrewCard props={committees.dk.dk1}/>
                        <CrewCard props={committees.dk.dk2}/>
                        <CrewCard props={committees.dk.dk3}/>
                    </div>

                    {/* İdari Kurul */}
                    <h2>İdari Kurul</h2>
                    <hr />
                    <div className="row justify-content-md-center p-3">
                        {/* AESS */}
                        <CrewCard props={committees.aess.idariKurul[0]}/>
                        <CrewCard props={committees.aess.idariKurul[1]}/>
                        {/* ComSoc */}
                        <CrewCard props={committees.comsoc.idariKurul[0]}/>
                        {/* CS */}
                        <CrewCard props={committees.cs.idariKurul[0]}/>
                        <CrewCard props={committees.cs.idariKurul[1]}/>
                        {/* EA */}
                        <CrewCard props={committees.ea.idariKurul[0]}/>
                        {/* EMBS */}
                        <CrewCard props={committees.embs.idariKurul[0]}/>
                        <CrewCard props={committees.embs.idariKurul[1]}/>
                        {/* PES */}
                        <CrewCard props={committees.pes.idariKurul[0]}/>
                        <CrewCard props={committees.pes.idariKurul[1]}/>
                        {/* RAS */}
                        <CrewCard props={committees.ras.idariKurul[0]}/>
                        <CrewCard props={committees.ras.idariKurul[1]}/>
                        {/* WIE */}
                        <CrewCard props={committees.wie.idariKurul[0]}/>
                        <CrewCard props={committees.wie.idariKurul[1]}/>
                         
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crew;
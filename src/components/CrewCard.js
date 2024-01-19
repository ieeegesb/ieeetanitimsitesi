import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const CrewCard = ({ props }) => {
    return (
        <div className="col col-lg-4 deneme">
            <div className="card h-100" style={{ borderWidth: 2, borderStyle: 'solid', borderColor: 'black' }}>

                <h3>{props.name}</h3>
                <div style={{textAlign: 'center', marginBottom: "20px"}}>
                    <img src={require(`../img/crew23/${props.photo}.png`)} alt={props.name} className="crew-img" />
                    <br />
                    <p>{props.desc}</p>
                </div>

            </div>
        </div>
    )
}

export default CrewCard;
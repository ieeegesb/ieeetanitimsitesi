import React from "react";
import CommitteeCard from "./CommitteeCard";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const CommitteesPage = () => {
  return (
    <React.Fragment>
      <div>
        
        <div className="container cont">
          <div className="row justify-content-md-center p-3">

            <CommitteeCard
              img="https://i.picsum.photos/id/798/300/200.jpg?hmac=DVs7GsLUR_k_0sTdmQ3-9T8US5lgyOizQsCL1e2EQ9o"
              text="AESS"
              desc="AEROSPACE AND ELECTRONIC SYSTEMS SOCIETY"
            />
            <CommitteeCard
              img="https://i.picsum.photos/id/928/300/200.jpg?hmac=P9RQc14BkBxIJYQJxLcrLTt-4unse48mMh6v7jGWTf0"
              text="CS"
              desc="COMPUTER SOCIETY"
            />
          </div>
          <div className="row justify-content-md-center p-3">

            <CommitteeCard
              img="https://i.picsum.photos/id/798/300/200.jpg?hmac=DVs7GsLUR_k_0sTdmQ3-9T8US5lgyOizQsCL1e2EQ9o"
              text="EA"
              desc="EDUCATIONAL ACTIVITIES"
            />
            <CommitteeCard
              img="https://i.picsum.photos/id/928/300/200.jpg?hmac=P9RQc14BkBxIJYQJxLcrLTt-4unse48mMh6v7jGWTf0"
              text="EDSOC"
              desc="EDUCATION SOCIETY" />
          </div>
          <div className="row justify-content-md-center p-3">

            <CommitteeCard
              img="https://i.picsum.photos/id/798/300/200.jpg?hmac=DVs7GsLUR_k_0sTdmQ3-9T8US5lgyOizQsCL1e2EQ9o"
              text="EMBS"
              desc="ENGINEERING IN MEDICINE AND BIOLOGY SOCIETY"
            />
            <CommitteeCard
              img="https://i.picsum.photos/id/928/300/200.jpg?hmac=P9RQc14BkBxIJYQJxLcrLTt-4unse48mMh6v7jGWTf0"
              text="ENET"
              desc="ENTREPRENEURSHIP SOCIETY"
            />
          </div>
          <div className="row justify-content-md-center p-3">

            <CommitteeCard
              img="https://i.picsum.photos/id/798/300/200.jpg?hmac=DVs7GsLUR_k_0sTdmQ3-9T8US5lgyOizQsCL1e2EQ9o"
              text="PES"
              desc="POWER AND ENERGY SOCIETY"
            />
            <CommitteeCard
              img="https://i.picsum.photos/id/928/300/200.jpg?hmac=P9RQc14BkBxIJYQJxLcrLTt-4unse48mMh6v7jGWTf0"
              text="RAS"
              desc="ROBOTICS & AUTOMATION SOCIETY"
            />
          </div>
          <div className="row justify-content-md-center p-3">

            <CommitteeCard
              img="https://i.picsum.photos/id/798/300/200.jpg?hmac=DVs7GsLUR_k_0sTdmQ3-9T8US5lgyOizQsCL1e2EQ9o"
              text="WIE"
              desc="WOMEN IN ENGINEERING"
            />
          </div>
       
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommitteesPage;

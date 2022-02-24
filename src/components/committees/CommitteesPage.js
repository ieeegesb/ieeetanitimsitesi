import React from "react";
import CommitteeCard from "./CommitteeCard";
import "bootstrap/dist/css/bootstrap.css";
import committees from "./committees.json"

const CommitteesPage = () => {
  return (
    <React.Fragment>
      <div>

        <div className="container cont">
          <div className="row justify-content-md-center p-3">

            <CommitteeCard
              fullname={committees.aess.fullname}
              imgSrc="https://i.picsum.photos/id/798/300/200.jpg?hmac=DVs7GsLUR_k_0sTdmQ3-9T8US5lgyOizQsCL1e2EQ9o"
              text="AESS"
            />
            <CommitteeCard
              fullname={committees.cs.fullname}
              imgSrc="https://i.picsum.photos/id/928/300/200.jpg?hmac=P9RQc14BkBxIJYQJxLcrLTt-4unse48mMh6v7jGWTf0"
              text="CS"

            />
          </div>
          <div className="row justify-content-md-center p-3">

            <CommitteeCard
              fullname={committees.ea.fullname}
              imgSrc="https://i.picsum.photos/id/798/300/200.jpg?hmac=DVs7GsLUR_k_0sTdmQ3-9T8US5lgyOizQsCL1e2EQ9o"
              text="EA"

            />
            <CommitteeCard
              fullname={committees.edsoc.fullname}
              imgSrc="https://i.picsum.photos/id/928/300/200.jpg?hmac=P9RQc14BkBxIJYQJxLcrLTt-4unse48mMh6v7jGWTf0"
              text="EDSOC"
            />
          </div>
          <div className="row justify-content-md-center p-3">

            <CommitteeCard
              fullname={committees.embs.fullname}
              imgSrc="https://i.picsum.photos/id/798/300/200.jpg?hmac=DVs7GsLUR_k_0sTdmQ3-9T8US5lgyOizQsCL1e2EQ9o"
              text="EMBS"

            />
            <CommitteeCard
              fullname={committees.enet.fullname}
              imgSrc="https://i.picsum.photos/id/928/300/200.jpg?hmac=P9RQc14BkBxIJYQJxLcrLTt-4unse48mMh6v7jGWTf0"
              text="ENET"

            />
          </div>
          <div className="row justify-content-md-center p-3">

            <CommitteeCard
              fullname={committees.pes.fullname}
              imgSrc="https://i.picsum.photos/id/798/300/200.jpg?hmac=DVs7GsLUR_k_0sTdmQ3-9T8US5lgyOizQsCL1e2EQ9o"
              text="PES"

            />
            <CommitteeCard
              fullname={committees.ras.fullname}
              imgSrc="https://i.picsum.photos/id/928/300/200.jpg?hmac=P9RQc14BkBxIJYQJxLcrLTt-4unse48mMh6v7jGWTf0"
              text="RAS"

            />
          </div>
          <div className="row justify-content-md-center p-3">

            <CommitteeCard
              fullname={committees.wie.fullname}
              imgSrc="https://i.picsum.photos/id/798/300/200.jpg?hmac=DVs7GsLUR_k_0sTdmQ3-9T8US5lgyOizQsCL1e2EQ9o"
              text="WIE"

            />
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default CommitteesPage;

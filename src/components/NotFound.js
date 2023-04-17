import React from 'react';

function NotFound() {
  return (
    <div className='center-soon'>
      <p className="Soon hazard-border">404 Not Found</p>
      <img src={require("../components/images/coming-soon.png")} alt="" width="500px"/>
    </div>
  );
}

export default NotFound;
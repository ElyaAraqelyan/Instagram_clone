import React from "react";
import Sidenav from "./navigation/Sidenav";
import TimeLine from "./timeline/TimeLine";
import "./Homepage.css"; 

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <TimeLine />
      </div>
    </div>
  );
};

export default Homepage;

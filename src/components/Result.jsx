import React from "react";
import { useLocation } from "react-router-dom";

import Navigation from "./Navigation";

function Result(props) {
  let location = useLocation();
  // console.log(location.prop);
  const score = location.prop.score;
  const isFull = score === 5 ? true : false;
  return (
    <div>
      <Navigation />
      <div className="home">
        <p>Your score is {score} / 5</p>
        {isFull && <p>You got a perfect score</p>}
      </div>
    </div>
  );
}

export default Result;

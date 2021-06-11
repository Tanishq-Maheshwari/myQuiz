import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <div>
        <Link to="/" className="link link-home">
          Home
        </Link>
        {/* <Link to="/leaderboard" className="link">
          Leaderboard
        </Link> */}
      </div>
    </div>
  );
}

export default withRouter(Navigation);

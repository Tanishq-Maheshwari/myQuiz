import React from "react";
import { Link } from "react-router-dom";
// import Navigation from "./Navigation";

function Home() {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="home">
        <div>
          <p>Welcome to the Marvel quiz...</p>
          <button>
            <Link to="/start" className="link">
              Start
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

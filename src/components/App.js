import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Heading from "./Heading";
import Footer from "./Footer";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Start from "./Start";
import Result from "./Result";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Heading />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/leaderboard" exact component={() => <Leaderboard />} />
          <Route path="/start" exact component={() => <Start />} />
          <Route path="/result" exact component={() => <Result />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

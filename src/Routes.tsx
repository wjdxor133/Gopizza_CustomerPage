import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main/Main";
// import KakaoPlusBtn from "./components/Application/KakaoPlusBtn/KakaoPlusBtn";
import InstaConnect from "./components/Application/InstaConnect/InstaConnect";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={InstaConnect} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

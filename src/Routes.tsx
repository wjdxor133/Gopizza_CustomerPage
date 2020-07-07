import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main/Main";
import Map from "../src/components/Map/Map";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/map" component={Map} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

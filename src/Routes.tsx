import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main/Main";
import Map from "../src/components/Map/Map";
import Menu from "../src/pages/Menu/Menu";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/" component={Main} />
          <Route path="/map" component={Map} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

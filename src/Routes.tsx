import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/pages/Main/Main";
import Map from "../src/components/Map/Map";
import Menu from "../src/pages/Menu/Menu";
import { auth } from "./core/utils/firebase/firebase";

import { Provider } from "react-redux";

import store from "./redux/store";

interface State {
  currentUser: any;
}

class Routes extends React.Component {
  state: State = {
    currentUser: null,
  };

  unsubscribeFromAuth: any = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log("user", user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/map" component={Map} />
            <Route path="/menu" component={Menu} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Routes;

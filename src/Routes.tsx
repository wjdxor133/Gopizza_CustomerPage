import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Main from "../src/pages/Main/Main";
import Map from "../src/components/Map/Map";
import Menu from "../src/pages/Menu/Menu";
import Checkout from "../src/pages/Checkout/Checkout";

import { Provider } from "react-redux";

import configureStore, { history } from "./redux/store";

const store = configureStore();

class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/map" component={Map} />
            <Route path="/menu" component={Menu} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Routes;

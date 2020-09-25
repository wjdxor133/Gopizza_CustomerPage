import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../../src/pages/Main/Main";
import Map from "../../src/pages/Map/Map";
import Menu from "../../src/pages/Menu/Menu";
import Checkout from "../../src/pages/Checkout/Checkout";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from ".././redux/store";

class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/map" component={Map} />
              <Route path="/menu" component={Menu} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default Routes;

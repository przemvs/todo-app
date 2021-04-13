import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Route, Router, Switch } from "react-router-dom";

import { Header, Navigation } from "components";
import store, { persistor } from "state/store";
import { history } from "utility";
import { Counter, Home, KendoView, KendoHoc } from "views";

import "@progress/kendo-theme-default/dist/all.css";
import "./styles.css";

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/kendogrid" component={KendoView} />
        <Route exact path="/kendogrid-hoc" component={KendoHoc} />
      </Switch>
    </>
  );
};

function initializeApp() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    document.querySelector("#root")
  );
}

initializeApp();

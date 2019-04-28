import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import classes from "./App.css";
import Layout from "./hoc/Layout/Layout";

const Me = React.lazy(() => import("./containers/Me/Me"));
const Experience = React.lazy(() =>
  import("./containers/Experience/Experience")
);
const Contact = React.lazy(() => import("./containers/Contact/Contact"));

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Me />
            </Suspense>
          )}
        />
        <Route
          path="/experience"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Experience />
            </Suspense>
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          )}
        />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <React.Fragment>
        <Layout className={classes.App}>{routes}</Layout>
      </React.Fragment>
    );
  }
}

export default App;

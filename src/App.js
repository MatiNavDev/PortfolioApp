import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import classes from "./App.css";
import Layout from "./hoc/Layout/Layout";
import * as actions from "./store/actions";

const Me = React.lazy(() => import("./containers/Me/Me"));
const Experience = React.lazy(() =>
  import("./containers/Experience/Experience")
);
const Contact = React.lazy(() => import("./containers/Contact/Contact"));

class App extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  resize = () => {
    this.props.onSetIsMobile(window.innerWidth <= 530);
  };

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

const mapDispatchToProps = dispatch => {
  return {
    onSetIsMobile: isMobile => dispatch(actions.setIsMobile(isMobile))
  };
};

App.propTypes = {
  onSetIsMobile: PropTypes.func
};

//cuando se usa redux, el componente que declara las rutas tiene que ir con withRouter.

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);

import React, { Component, Suspense } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import ExperienceSummary from "../../components/Experience/ExperienceSummary/ExperienceSummary";
const DetailedCard = React.lazy(() => import("./DetailedCard/DetailedCard"));

class Experience extends Component {
  render() {
    //onToggleHandler es redux porque ahi se tiene que hacer el fetch y se le tiene que pasar la data directamente fetcheada
    // en el redux. Fijarse en los otros lados que tamb se haga un fetch porque es igual.

    return (
      <React.Fragment>
        <Switch>
          <Route
            path={this.props.match.path + "/:id"}
            render={props => (
              <Suspense fallback={<div>Loading ...</div>}>
                <DetailedCard {...props} />
              </Suspense>
            )}
          />
          <ExperienceSummary />
        </Switch>
      </React.Fragment>
    );
  }
}

Experience.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(Experience);

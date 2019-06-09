import React, { Component, Suspense } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import ExperienceSummary from "../../components/Experience/ExperienceSummary/ExperienceSummary";
const DetailedCard = React.lazy(() => import("./DetailedCard/DetailedCard"));

class Experience extends Component {
  state = {
    tecnologiesImgWithText: [],
    proyectsImgWithText: [],
    toggleOptionChosed: "P"
  };

  componentDidMount() {
    const tecnologiesImgWithText = [
      {
        id: 1,
        title: "title 1",
        image:
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 2,
        title: "title 2",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      },
      {
        id: 3,
        title: "title 3",
        image:
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 4,
        title: "title 4",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      }
    ];

    const proyectsImgWithText = [
      {
        id: 2,
        title: "title 2",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      },
      {
        id: 4,
        title: "title 4",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      },
      {
        id: 3,
        title: "title 3",
        image:
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 1,
        title: "title 1",
        image:
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    ];

    this.setState({ tecnologiesImgWithText, proyectsImgWithText });
  }

  onToggleHandler = option => this.setState({ toggleOptionChosed: option });

  onShowExperienceCardDetail = id => {
    this.props.history.push(`experience/${id}`);
  };

  render() {
    const {
      toggleOptionChosed,
      proyectsImgWithText,
      tecnologiesImgWithText
    } = this.state;

    const params = {
      toggleOptionChosed,
      proyectsImgWithText,
      tecnologiesImgWithText,
      // gran candidato al redux aca
      onToggleHandler: this.onToggleHandler.bind(this),
      onShowExperienceCardDetail: this.onShowExperienceCardDetail.bind(this)
    };

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
          <ExperienceSummary params={params} />
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

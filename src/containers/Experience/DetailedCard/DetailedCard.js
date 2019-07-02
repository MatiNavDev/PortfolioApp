import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/src/styles.js";

import * as actions from "../../../store/actions";
import classes from "./DetailedCard.css";

//TODO: CAMBIAR EL HASHEADOR DE CLASES DE CSS. NO DA PARA MAS. HACER QUE ANDE EL CAROUSEL

class DetailedCard extends Component {
  componentDidMount() {
    /**
     * Recibe un id, en base a ese id hace el fetch con el servidor, obtiene la data y muestra.
     */
    const { id } = this.props.match;
    this.props.onFetchDetailedCard(id);
  }

  onShowExperienceCardDetail = id => {
    this.props.history.replace(`${id}`);
  };

  render() {
    const { loading, detailedCardFetched } = this.props;

    //TODO: handle error
    if (loading) return <div>Loading...</div>;

    const listOfRelateds = detailedCardFetched.related.map(r => (
      <span
        onClick={() => this.onShowExperienceCardDetail(r.id)}
        key={r.id}
        style={{ backgroundColor: r.color }}
      >
        {r.title}
      </span>
    ));

    const imagesCarousel = detailedCardFetched.images.map((img, i) => (
      <div key={i} data-src={img} />
    ));

    const slider = (
      <AwesomeSlider cssModule={AwsSliderStyles}>
        <div data-src={detailedCardFetched.images[0]} />
        <div data-src={detailedCardFetched.images[1]} />
        <div data-src={detailedCardFetched.images[2]} />
      </AwesomeSlider>
    );

    return (
      <div className={classes.DetailedCard}>
        <h1 className={classes.Title}>{detailedCardFetched.title}</h1>
        <div className={classes.ContentContainer}>
          <div className={classes.ContentCol}>
            <p> {detailedCardFetched.text} </p>
          </div>
          <div className={classes.ContentCol}>{slider}</div>
        </div>
        <div className={classes.RelatedContainer}>{listOfRelateds}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  detailedCardFetched: state.detailedCard.detailedCardFetched,
  loading: state.detailedCard.loading,
  errorFromFetch: state.detailedCard.errorFromFetch
});

const mapDispatchToProps = dispatch => ({
  onFetchDetailedCard: id => dispatch(actions.fetchDetailedCard(id))
});

DetailedCard.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  loading: PropTypes.bool,
  detailedCardFetched: PropTypes.object,
  onGoToDetailedCard: PropTypes.func,
  onFetchDetailedCard: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedCard);

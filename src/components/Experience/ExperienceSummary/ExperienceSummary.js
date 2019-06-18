import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import classes from "./ExperienceSummary.css";
import ExperienceCard from "../../UI/ExperienceCard/ExperienceCard";
import ToggleExperienceButton from "../../UI/ToggleExperienceButton/ToggleExperienceButton";
import * as actions from "../../../store/actions";

class ExperienceSummary extends Component {
  componentDidMount() {
    this.props.onFetchProyectsImgWithText();
    this.props.onFetchTecnologiesImgWithText();
  }

  render() {
    const {
      proyectsImgWithText,
      tecnologiesImgWithText,
      toggleOptionChosed
    } = this.props;

    const cards =
      toggleOptionChosed === "P" ? proyectsImgWithText : tecnologiesImgWithText;

    const cardsComponent = cards.map(c => (
      <ExperienceCard key={c.id} id={c.id} title={c.title} image={c.image} />
    ));

    return (
      <div className={classes.Experience}>
        <div className={classes.ToggleContainer}>
          <ToggleExperienceButton />
        </div>
        <div className={classes.CardsContainer}>{cardsComponent}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  proyectsImgWithText: state.experience.proyectsImgWithText,
  tecnologiesImgWithText: state.experience.tecnologiesImgWithText,
  toggleOptionChosed: state.experience.toggleOptionChosed
});

const mapDispatchToProps = dispatch => ({
  onFetchProyectsImgWithText: () =>
    dispatch(actions.fetchProyectsImgWithText()),
  onFetchTecnologiesImgWithText: () =>
    dispatch(actions.fetchTecnologiesImgWithText())
});

ExperienceSummary.propTypes = {
  proyectsImgWithText: PropTypes.array,
  tecnologiesImgWithText: PropTypes.array,
  toggleOptionChosed: PropTypes.string,
  onFetchProyectsImgWithText: PropTypes.func,
  onFetchTecnologiesImgWithText: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExperienceSummary);

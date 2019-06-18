import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import classes from "./ToggleExperienceButton.css";
import * as actions from "../../../store/actions";

class ToggleExperienceButton extends Component {
  render() {
    return (
      <div className={classes.ToggleExperienceButton}>
        <div onClick={() => this.props.onToggleHandler("P")}>Proyectos</div>
        <div onClick={() => this.props.onToggleHandler("T")}>Tecnologias</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onToggleHandler: toggleHandlerChosen =>
    dispatch(actions.setToggleHandler(toggleHandlerChosen))
});

ToggleExperienceButton.propTypes = {
  onToggleHandler: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(ToggleExperienceButton);

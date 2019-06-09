import React from "react";
import PropTypes from "prop-types";

import classes from "./ToggleExperienceButton.css";

const toggleExperienceButton = props => (
  <div className={classes.ToggleExperienceButton}>
    <div onClick={() => props.onToggleHandler("P")}>Proyectos</div>
    <div onClick={() => props.onToggleHandler("T")}>Tecnologias</div>
  </div>
);

toggleExperienceButton.propTypes = {
  onToggleHandler: PropTypes.func
};

export default toggleExperienceButton;

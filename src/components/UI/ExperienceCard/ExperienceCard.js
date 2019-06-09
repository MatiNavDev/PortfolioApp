import React from "react";
import PropTypes from "prop-types";

import classes from "./ExperienceCard.css";

const experienceCard = props => (
  <div onClick={props.clicked} className={classes.ExperienceCard}>
    <div
      style={{
        backgroundImage: `url('${props.image}')`
      }}
    />
    <div>{props.title}</div>
  </div>
);

experienceCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  clicked: PropTypes.func
};

export default experienceCard;

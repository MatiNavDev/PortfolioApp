import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import classes from "./ExperienceCard.css";

const experienceCard = props => (
  <div
    onClick={() => props.history.push(`experience/${props.id}`)}
    className={classes.ExperienceCard}
  >
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
  history: PropTypes.object,
  id: PropTypes.number
};

export default withRouter(experienceCard);

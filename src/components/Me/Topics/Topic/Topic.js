import React from "react";
import Proptypes from "prop-types";

import classes from "./Topic.css";

const topic = props => (
  <span className={classes.Topic} onClick={props.clicked}>
    {props.name}
  </span>
);

topic.propTypes = {
  name: Proptypes.string,
  clicked: Proptypes.func
};

export default topic;

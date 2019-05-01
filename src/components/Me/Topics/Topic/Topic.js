import React from "react";
import Proptypes from "prop-types";

const topic = props => <span>{props.topic}</span>;

topic.propTypes = {
  topic: Proptypes.string
};

export default topic;

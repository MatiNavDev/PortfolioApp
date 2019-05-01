import React from "react";
import Proptypes from "prop-types";

import Topic from "./Topic/Topic";

const topics = props => {
  return (
    <div>
      {props.topics.map((t, i) => (
        <Topic key={i}>{t}</Topic>
      ))}
    </div>
  );
};

topics.propTypes = {
  topics: Proptypes.array
};

export default topics;

import React from "react";
import Proptypes from "prop-types";

import Topic from "./Topic/Topic";
import classes from "./Topics.css";

const topics = props => {
  return (
    <div className={classes.Topics}>
      {props.topics.map((t, i) => (
        <Topic
          key={i}
          name={t.topic}
          clicked={() => {
            props.clicked(t.id);
          }}
        />
      ))}
    </div>
  );
};

topics.propTypes = {
  topics: Proptypes.array,
  clicked: Proptypes.func
};

export default topics;

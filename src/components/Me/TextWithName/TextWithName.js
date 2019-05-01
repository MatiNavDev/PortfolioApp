import React from "react";
import PropTypes from "prop-types";

const textWithName = props => {
  const { topicToShow } = props;

  const topicCharacters = topicToShow.topic.replace(/\s/g, "").split("");

  return (
    <React.Fragment>
      <div>
        {topicCharacters.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </div>
      <div>{topicToShow.text}</div>
    </React.Fragment>
  );
};

textWithName.propTypes = {
  topicToShow: PropTypes.object
};

export default textWithName;

import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import classes from "./TextWithName.css";

const textWithName = props => {
  const { topicToShow } = props;

  const topicCharacters = topicToShow.topic.replace(/\s/g, "").split("");

  const fadeInFromRight = keyframes`
    0% {
      transform: translateX(200%);
      opacity: 1;
    }
  
    75% {
      transform: translateX(-25%);
    }
  
    100% {
      transform: translateX(0);
      opacity: 1;
    }`;

  return (
    <span className={classes.TextWithName}>
      <div className={classes.letterContainer}>
        {topicCharacters.map((c, i) => {
          const delay = i * 0.5;
          const AnimatedSpan = styled.div`
            animation: ${fadeInFromRight} 1.2s ease-out ${delay}s forwards;
            opacity: 0;
          `;
          return <AnimatedSpan key={i}>{c}</AnimatedSpan>;
        })}
      </div>
      <span className={classes.text}>{topicToShow.text}</span>
    </span>
  );
};

textWithName.propTypes = {
  topicToShow: PropTypes.object
};

export default textWithName;

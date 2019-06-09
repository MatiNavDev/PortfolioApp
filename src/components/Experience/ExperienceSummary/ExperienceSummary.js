import React from "react";
import PropTypes from "prop-types";

import classes from "./ExperienceSummary.css";
import ExperienceCard from "../../UI/ExperienceCard/ExperienceCard";
import ToggleExperienceButton from "../../UI/ToggleExperienceButton/ToggleExperienceButton";

const experienceSummary = props => {
  const {
    toggleOptionChosed,
    proyectsImgWithText,
    tecnologiesImgWithText,
    onToggleHandler,
    onShowExperienceCardDetail
  } = props.params;

  const cards =
    toggleOptionChosed === "P" ? proyectsImgWithText : tecnologiesImgWithText;

  const cardsComponent = cards.map((c, i) => (
    <ExperienceCard
      key={i}
      title={c.title}
      image={c.image}
      clicked={() => onShowExperienceCardDetail(c.id)}
    />
  ));

  return (
    <div className={classes.Experience}>
      <div className={classes.ToggleContainer}>
        <ToggleExperienceButton onToggleHandler={() => onToggleHandler()} />
      </div>
      <div className={classes.CardsContainer}>{cardsComponent}</div>
    </div>
  );
};

experienceSummary.propTypes = {
  params: PropTypes.object
};

export default experienceSummary;

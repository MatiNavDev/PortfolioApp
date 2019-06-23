import React from "react";
import PropTypes from "prop-types";

import classes from "./OpinionCard.css";

const opinionCard = props => {
  const { image, opinion, url, active } = props;

  /**
   * Navega hacia un nuevo tab, con la url enviada en las props
   */
  const onGoToProfile = () => window.open(url, "_blank").focus();

  const cardClasses = [classes.Card];
  if (active) cardClasses.push(classes.Active);

  return (
    <div className={cardClasses.join(" ")}>
      <div
        onClick={() => onGoToProfile()}
        style={{
          backgroundImage: `url('${image}')`,
          width: "100%",
          height: "50%",
          display: "inline-block",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      />
      <div className={classes.Details}>{opinion}</div>
      <div />
    </div>
  );
};

opinionCard.propTypes = {
  image: PropTypes.string.isRequired,
  opinion: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default opinionCard;

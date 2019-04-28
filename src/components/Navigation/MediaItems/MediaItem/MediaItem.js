import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./MediaItem.css";

const mediaItem = props => {
  return (
    <li className={classes.MediaItem}>
      <a target="_blank" rel="noopener noreferrer" href={props.to}>
        <FontAwesomeIcon icon={props.icon} />
        <span className={classes.withSomeSpace}>{props.children}</span>
      </a>
    </li>
  );
};

mediaItem.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.any,
  children: PropTypes.any
};

export default mediaItem;

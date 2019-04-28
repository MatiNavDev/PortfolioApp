import React from "react";
import PropTypes from "prop-types";

import classes from "./DrawerToggle.css";

const drawerToggle = props => {
  const { openOrClose, opened } = props;
  const divsToShow = [];
  for (let i = 0; i < 3; i++) {
    divsToShow.push(<div className={opened ? classes.active : ""} />);
  }

  const menuText = opened ? "Close" : "Menu";

  return (
    <React.Fragment>
      <div className={classes.DrawerToggle} onClick={() => openOrClose()}>
        <span
          className={
            opened
              ? [classes.menu, classes.active].join(" ")
              : [classes.menu, classes.noActive].join(" ")
          }
        >
          {menuText}
        </span>
        <span className={classes.divsContainer}>{divsToShow}</span>
      </div>
    </React.Fragment>
  );
};

drawerToggle.propTypes = {
  openOrClose: PropTypes.func,
  opened: PropTypes.bool
};

export default drawerToggle;

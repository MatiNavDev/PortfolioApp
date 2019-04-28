import React from "react";
import PropTypes from "prop-types";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = props => {
  const { closed, isMobile } = props;

  const navigationItems = [
    { to: "/", name: "matias navarro", exact: true },
    { to: "/experience", name: "Portfolio" }
  ];

  if (isMobile) {
    navigationItems.push({ to: "/contact", name: "Contact Me!" });
  }

  return (
    <ul onClick={closed} className={classes.NavigationItems}>
      {navigationItems.map((navItem, i) => (
        <NavigationItem key={i} to={navItem.to} exact={navItem.exact}>
          {navItem.name}
        </NavigationItem>
      ))}
    </ul>
  );
};

navigationItems.propTypes = {
  closed: PropTypes.func,
  isMobile: PropTypes.bool
};

export default navigationItems;

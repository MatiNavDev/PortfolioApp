import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./NavigationItem.css";

const navigationItem = props => (
  <li className={classes.NavigationItem}>
    <NavLink activeClassName={classes.active} to={props.to} exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.any
};

export default navigationItem;

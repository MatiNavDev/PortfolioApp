import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";
import * as actions from "../../../store/actions";

class NavigationItems extends Component {
  render() {
    const { isMobile } = this.props;

    const navigationItems = [
      { to: "/", name: "matias navarro", exact: true },
      { to: "/experience", name: "Portfolio" }
    ];

    if (isMobile) {
      navigationItems.push({ to: "/contact", name: "Contact Me!" });
    }

    return (
      <ul
        onClick={isMobile ? () => this.props.setShowSideDrawer(false) : null}
        className={classes.NavigationItems}
      >
        {navigationItems.map((navItem, i) => (
          <NavigationItem key={i} to={navItem.to} exact={navItem.exact}>
            {navItem.name}
          </NavigationItem>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  isMobile: state.common.isMobile
});

const mapDispatchToProps = dispatch => ({
  setShowSideDrawer: showSideDrawer =>
    dispatch(actions.setShowSideDrawer(showSideDrawer))
});

NavigationItems.propTypes = {
  setShowSideDrawer: PropTypes.func,
  isMobile: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationItems);

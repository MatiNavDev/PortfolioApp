import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import classes from "./DrawerToggle.css";
import * as actions from "../../../../store/actions";

class DrawerToggle extends Component {
  render() {
    const { showSideDrawer } = this.props;
    const divsToShow = [];
    for (let i = 0; i < 3; i++) {
      divsToShow.push(
        <div key={i} className={showSideDrawer ? classes.active : ""} />
      );
    }

    const menuText = showSideDrawer ? "Close" : "Menu";

    const menuClasses = showSideDrawer
      ? [classes.DrawerToggle, classes.active].join(" ")
      : [classes.DrawerToggle, classes.noActive].join(" ");

    return (
      <React.Fragment>
        <div
          className={menuClasses}
          onClick={() => this.props.setShowSideDrawer(!showSideDrawer)}
        >
          <span className={classes.menu}>{menuText}</span>
          <span className={classes.divsContainer}>{divsToShow}</span>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  showSideDrawer: state.layout.showSideDrawer
});

const mapDispatchToProps = dispatch => ({
  setShowSideDrawer: showSideDrawer =>
    dispatch(actions.setShowSideDrawer(showSideDrawer))
});

DrawerToggle.propTypes = {
  setShowSideDrawer: PropTypes.func,
  showSideDrawer: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerToggle);

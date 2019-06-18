import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import WorkTogether from "../../components/Navigation/WorkTogether/WorkTogether";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import DrawerToggle from "../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.css";

class Layout extends Component {
  render() {
    const { children, isMobile } = this.props;
    const navigationItemToShow = isMobile ? (
      <React.Fragment>
        <DrawerToggle />
        <SideDrawer />
      </React.Fragment>
    ) : (
      <Toolbar />
    );

    return (
      <React.Fragment>
        {navigationItemToShow}
        <main className={classes.Layout}>{children}</main>
        <WorkTogether />
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any,
  isMobile: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isMobile: state.common.isMobile
  };
};

export default connect(mapStateToProps)(Layout);

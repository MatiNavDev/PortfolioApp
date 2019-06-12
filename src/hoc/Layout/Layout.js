import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import WorkTogether from "../../components/Navigation/WorkTogether/WorkTogether";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import DrawerToggle from "../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.css";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  handleOpenOrCloseSideDrawer = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    console.log("Lay rendered");
    const { children } = this.props;
    const navigationItemToShow = this.props.isMobile ? (
      <React.Fragment>
        <DrawerToggle
          openOrClose={() => this.handleOpenOrCloseSideDrawer()}
          opened={this.state.showSideDrawer}
        />
        <SideDrawer
          closed={() => this.handleOpenOrCloseSideDrawer()}
          showSideDrawer={this.state.showSideDrawer}
        />
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

import React, { Component } from "react";
import PropTypes from "prop-types";

import WorkTogether from "../../components/Navigation/WorkTogether/WorkTogether";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import DrawerToggle from "../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.css";

class Layout extends Component {
  state = {
    isMobile: false,
    showSideDrawer: false
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  resize = () => {
    this.setState({ isMobile: window.innerWidth <= 530 });
  };

  handleOpenOrCloseSideDrawer = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  render() {
    const { children } = this.props;
    const navigationItemToShow = this.state.isMobile ? (
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
  children: PropTypes.any
};

export default Layout;

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import classes from "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import MediaItems from "../MediaItems/MediaItems";

class SideDrawer extends Component {
  /**
   * TODO:
   * Hacer que mi nombre te abra el mail con mi direccion de correo puesta. Hacer una pantalla que sea para el envio de mail
   * y mandarlo yo.
   */
  render() {
    return this.props.showSideDrawer ? (
      <nav className={classes.SideDrawer}>
        <NavigationItems />
        <MediaItems />
      </nav>
    ) : null;
  }
}

const mapStateToProps = state => ({
  showSideDrawer: state.layout.showSideDrawer
});

SideDrawer.propTypes = {
  showSideDrawer: PropTypes.bool
};

export default connect(mapStateToProps)(SideDrawer);

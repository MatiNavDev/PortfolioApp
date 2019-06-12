import React from "react";

import classes from "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import MediaItems from "../MediaItems/MediaItems";

const sideDrawer = props => {
  /**
   * TODO:
   * Hacer que mi nombre te abra el mail con mi direccion de correo puesta. Hacer una pantalla que sea para el envio de mail
   * y mandarlo yo.
   */

  const { showSideDrawer, closed } = props;
  let elementsToShow = null;
  if (showSideDrawer)
    elementsToShow = (
      <nav className={classes.SideDrawer}>
        <NavigationItems closed={closed} isMobile={true} />
        <MediaItems />
      </nav>
    );

  return elementsToShow;
};

export default sideDrawer;

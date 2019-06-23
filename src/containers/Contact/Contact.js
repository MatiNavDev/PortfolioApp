import React, { Component } from "react";

import MediaItems from "../../components/Navigation/MediaItems/MediaItems";
import DirectionData from "../../components/Navigation/DirectionData/DirectionData";
import OpinionCardsSlider from "../../components/Contact/OpinionCardsSlider/OpinionCardsSlider";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <OpinionCardsSlider />
        <MediaItems />
        <DirectionData />
      </React.Fragment>
    );
  }
}

export default Contact;

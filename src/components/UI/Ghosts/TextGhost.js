import React from "react";
import ContentLoader from "react-content-loader";
import PropTypes from "prop-types";

const TextGhost = props => {
  const { amountOfLines, contentHeight } = props;
  let lines = [],
    Yposition,
    width;

  for (let i = 0; i < amountOfLines; i++) {
    Yposition = (30 * i).toString();
    width = i % 2 === 0 ? 350 : 380;
    lines.push(
      <rect
        key={i}
        x="30"
        y={Yposition}
        rx="3"
        ry="3"
        width={width.toString()}
        height="6"
      />
    );
  }

  return (
    <ContentLoader
      height={contentHeight || 200}
      width={460}
      speed={1}
      primaryColor="#f9f9f9"
      secondaryColor="#ecebeb"
    >
      {lines}
    </ContentLoader>
  );
};

TextGhost.propTypes = {
  amountOfLines: PropTypes.number,
  contentHeight: PropTypes.number
};

export { TextGhost };

import React from "react";
import ContentLoader from "react-content-loader";
import PropTypes from "prop-types";

const AsideLinesGhost = props => {
  const { amountOfLines } = props;
  let lines = [],
    Xposition;

  for (let i = 0; i < amountOfLines; i++) {
    Xposition = (100 * i).toString();
    lines.push(
      <rect key={i} x={Xposition} y="20" rx="3" ry="3" width="80" height="6" />
    );
  }

  return (
    <ContentLoader
      height={30}
      width={Number(Xposition) + 100}
      speed={1}
      primaryColor="#f9f9f9"
      secondaryColor="#ecebeb"
    >
      {lines}
    </ContentLoader>
  );
};

AsideLinesGhost.propTypes = {
  amountOfLines: PropTypes.number
};

export { AsideLinesGhost };

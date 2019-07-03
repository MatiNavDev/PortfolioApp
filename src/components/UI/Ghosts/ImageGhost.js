import React from "react";
import ContentLoader from "react-content-loader";
import PropTypes from "prop-types";

const ImageGhost = props => {
  const { withTopics } = props;
  let topics;
  if (withTopics)
    topics = (
      <React.Fragment>
        <rect x="30" y="156" rx="3" ry="3" width="60" height="6" />
        <rect x="100" y="156" rx="3" ry="3" width="60" height="6" />
        <rect x="170" y="156" rx="3" ry="3" width="60" height="6" />
        <rect x="240" y="156" rx="3" ry="3" width="60" height="6" />
      </React.Fragment>
    );

  return (
    <ContentLoader
      height={200}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="3" y="11" rx="0" ry="0" width="330" height="132" />
      {topics}
    </ContentLoader>
  );
};

ImageGhost.propTypes = {
  withTopics: PropTypes.bool
};

export { ImageGhost };

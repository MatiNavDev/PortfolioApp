import React from "react";
import ContentLoader from "react-content-loader";

const ImagesGroupGhost = () => (
  <ContentLoader
    height={200}
    width={460}
    speed={1}
    primaryColor="#f9f9f9"
    secondaryColor="#ecebeb"
  >
    <rect x="7" y="41" rx="3" ry="3" width="125" height="89" />
    <rect x="325" y="45" rx="3" ry="3" width="125" height="89" />
    <rect x="165" y="23" rx="3" ry="3" width="125" height="89" />
  </ContentLoader>
);

export { ImagesGroupGhost };

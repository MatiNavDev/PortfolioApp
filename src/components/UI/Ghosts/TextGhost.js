import React from "react";
import ContentLoader from "react-content-loader";

const TextGhost = () => (
  <ContentLoader
    height={200}
    width={460}
    speed={1}
    primaryColor="#f9f9f9"
    secondaryColor="#ecebeb"
  >
    <rect x="30" y="0" rx="3" ry="3" width="350" height="6" />
    <rect x="30" y="20" rx="3" ry="3" width="380" height="6" />
    <rect x="30" y="40" rx="3" ry="3" width="350" height="6" />
    <rect x="30" y="60" rx="3" ry="3" width="380" height="6" />
    <rect x="30" y="80" rx="3" ry="3" width="350" height="6" />
    <rect x="30" y="100" rx="3" ry="3" width="380" height="6" />
    <rect x="30" y="120" rx="3" ry="3" width="350" height="6" />
    <rect x="30" y="140" rx="3" ry="3" width="380" height="6" />
  </ContentLoader>
);

export { TextGhost };

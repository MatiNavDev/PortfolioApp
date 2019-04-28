import React from "react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import MediaItem from "./MediaItem/MediaItem";
import classes from "./MediaItems.css";

const mediaItems = () => {
  const items = [
    {
      to: "https://github.com/MatiNavDev",
      icon: faGithub,
      name: "Github"
    },
    {
      to: "https://www.linkedin.com/in/matias-navarro/",
      icon: faLinkedinIn,
      name: "Linkedin"
    }
  ];
  return (
    <ul className={classes.MediaItems}>
      {items.map((item, i) => (
        <MediaItem key={i} to={item.to} icon={item.icon}>
          {item.name}
        </MediaItem>
      ))}
    </ul>
  );
};

export default mediaItems;

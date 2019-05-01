import React from "react";

import MediaItems from "../MediaItems/MediaItems";
import ContactMe from "../ContactMe/ContactMe";

import classes from "./WorkTogether.css";

const workTogether = () => {
  const {
    WorkTogether,
    hellContainer,
    middleWrap,
    helloLetters,
    together,
    centerContent,
    firstLet,
    secondLet,
    thirdLet,
    fourthLet,
    fifthLet,
    notShow,
    aBitUp,
    aBitDown
  } = classes;

  return (
    <footer className={WorkTogether}>
      <div className={[hellContainer, helloLetters].join(" ")}>
        <span className={[notShow, fourthLet].join(" ")}>H</span>
        <span className={[notShow, firstLet].join(" ")}>E</span>
        <span className={[notShow, thirdLet, aBitDown].join(" ")}>L</span>
        <span className={[notShow, fifthLet].join(" ")}>L</span>
      </div>
      <div>
        <span className={middleWrap}>
          <span className={[together, centerContent].join(" ")}>
            Let's work together
          </span>
          <MediaItems />
          <ContactMe />
        </span>
        <span className={[helloLetters, middleWrap].join(" ")}>
          <span
            className={[centerContent, notShow, secondLet, aBitUp].join(" ")}
          >
            O
          </span>
        </span>
      </div>
    </footer>
  );
};

export default workTogether;

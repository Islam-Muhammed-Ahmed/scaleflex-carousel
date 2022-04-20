import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import Styles from "./BtnStyle.module.css";
const BackToTopBtn = () => {
  // btn back to top
  const [moveUp, setMoveUp] = useState(false);
  const showButton = () => {
    if (window.scrollY >= 80) {
      setMoveUp(true);
    } else {
      setMoveUp(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", showButton);
  }, []);

  return (
    <div>
      <button
        className={`${Styles.btn} ${Styles.moving}
         ${moveUp ? `${Styles.block}` : `${Styles.hidden}`}`}
      >
        <AiOutlineArrowUp onClick={backToTop} />
      </button>
    </div>
  );
};

export default BackToTopBtn;

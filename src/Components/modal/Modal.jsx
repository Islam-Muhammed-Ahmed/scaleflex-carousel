import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./modal.module.css";

const Modal = ({
  clickedImage,
  handleRotationRight,
  handleRotationLeft,
  show,
  setShowModal,
  currentIndex,
  data,
}) => {
  console.log(clickedImage, clickedImage.name);
  const handleClick = (e) => {
    setShowModal(false);
  };
  return (
    show && (
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div>
            <div
              onClick={handleRotationLeft}
              className={`${styles.overlay_arrows__left} ${
                currentIndex === 0 && `${styles.disabled}`
              }`}
            >
              <FaArrowLeft />
            </div>
          </div>
          <div className={styles.modal__img__content}>
            <img
              src={clickedImage.url}
              alt={clickedImage.name}
              srcSet={clickedImage}
              className={styles.img}
            />
            <div className={styles.modal__closeBtn__text}>
              <span className={styles.close__btn} onClick={handleClick}>
                <AiOutlineCloseCircle />
              </span>
            </div>
            <span className={styles.modal__text}>
              {clickedImage.target.getAttribute("alt")}
              <br />
              <span>
                {(currentIndex += 1)} / {data.length}
              </span>
            </span>
          </div>
          <div>
            <div
              onClick={handleRotationRight}
              className={`${styles.overlay_arrows__right} ${
                currentIndex === 30 && `${styles.disabled}`
              }`}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

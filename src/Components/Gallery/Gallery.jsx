import React, { useState } from "react";
import { AiOutlineZoomIn } from "react-icons/ai";
import Modal from "../modal/Modal";

import styles from "./gallery.module.css";

const Gallery = ({ data }) => {
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const handleClickImage = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item);
    setShowModal(true);
  };
  // handling the next picture in the array
  const handleRotationRight = () => {
    const totalLength = data.length;
    // we want to check if the clicked item is the first element
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].url;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };
  // handling the prev picture in the array
  const handleRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[0].url;
      setClickedImage(newUrl);
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={item.uuid} className={styles.wrapper}>
          <div className={styles.imgContainer}>
            <img
              className={styles.img}
              src={item.url}
              onClick={() => handleClickImage(item, index)}
              alt={item.name}
              srcSet={item.url}
            />
          </div>
          <div className={styles.icon_wrapper}>
            <AiOutlineZoomIn
              className={styles.icon}
              onClick={() => handleClickImage(item, index)}
            />
          </div>
        </div>
      ))}
      {clickedImage && (
        <Modal
          show={showModal}
          currentIndex={currentIndex}
          setShowModal={setShowModal}
          handleRotationRight={handleRotationRight}
          handleRotationLeft={handleRotationLeft}
          clickedImage={clickedImage}
          data={data}
        />
      )}
    </div>
  );
};

export default Gallery;

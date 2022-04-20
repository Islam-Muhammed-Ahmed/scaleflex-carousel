import React, { useEffect, useState } from "react";
import Gallery from "./Components/Gallery/Gallery";
import BackToTopBtn from "./Components/BackToTopBtn/BackToTopBtn"
import Navbar from "./Components/Nav/Navbar";
const App = () => {
  const [data, setData] = useState([]);
  const fetchingData = async () => {
    const MainUrl =
      "https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy";
    const data = await fetch(MainUrl);
    const res = await data.json();
    setData(res);
  };

  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <>
      <Navbar />
      <Gallery data={data} />
      <BackToTopBtn />
    </>
  );
};

export default App;

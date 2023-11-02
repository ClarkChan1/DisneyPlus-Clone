import { useEffect, useState } from "react";
import "./home.css";
import ImageSlider from "./image-slider";
function Home() {
  const [imageArr, updateImageArr] = useState([
    "../images/clone-wars-pic.jpg",
    "../images/clone-wars-pic.jpg",
    "../images/clone-wars-pic.jpg",
    "../images/clone-wars-pic.jpg",
    "../images/clone-wars-pic.jpg",
    "../images/clone-wars-pic.jpg",
    "../images/clone-wars-pic.jpg",
    "../images/clone-wars-pic.jpg",
  ]);
  useEffect(() => {
    // updateImageArr([]);
  }, []);
  return (
    <div className="home-container">
      <div className="row-container">
        <p className="section-title">Animated Movies</p>
        <ImageSlider images={imageArr}></ImageSlider>
      </div>
      <div className="row-container">
        <p className="section-title">Walt Disney Animation Studios</p>
        <ImageSlider images={imageArr}></ImageSlider>
      </div>
      <div className="row-container">
        <p className="section-title">Star Wars</p>
        <ImageSlider images={imageArr}></ImageSlider>
      </div>
    </div>
  );
}
export default Home;

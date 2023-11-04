import { useEffect, useState } from "react";
import "./home.css";
import ImageSlider from "./image-slider";
import getPosters from "../utils/getPosters";
import { useNavigate } from "react-router-dom";

function Home() {
  const [disneyChannelImages, updateDisneyChannelImages] = useState([]);
  const [disneyMovieImages, updateDisneyMovieImages] = useState([]);
  const [starWarsImages, updateStarWarsImages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      updateDisneyChannelImages(
        await getPosters("discover", "tv", "Disney Television Animation")
      );
      updateDisneyMovieImages(
        await getPosters("discover", "movie", "Walt Disney Animation Studios")
      );
      updateStarWarsImages(await getPosters("search", "movie", "star wars"));
    }
    getData();
  }, []);
  return (
    <div className="home-container">
      <div className="row-container">
        <p className="section-title">Disney Channel</p>
        <button
          onClick={() => {
            navigate("content", { state: { title: "test" } });
          }}
        ></button>
        <ImageSlider images={disneyChannelImages}></ImageSlider>
      </div>
      <div className="row-container">
        <p className="section-title">Walt Disney Animation Studios</p>
        <ImageSlider images={disneyMovieImages}></ImageSlider>
      </div>
      <div className="row-container">
        <p className="section-title">Star Wars</p>
        <ImageSlider images={starWarsImages}></ImageSlider>
      </div>
    </div>
  );
}
export default Home;

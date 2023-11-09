import { useEffect, useState } from "react";
import "./home.css";
import ImageSlider from "./image-slider";
import getPosters from "../utils/getPosters";
import { posterAndName } from "./types";

function Home() {
  const [disneyChannelImages, updateDisneyChannelImages] = useState<
    posterAndName[]
  >([]);
  const [disneyMovieImages, updateDisneyMovieImages] = useState<
    posterAndName[]
  >([]);
  const [starWarsImages, updateStarWarsImages] = useState<posterAndName[]>([]);
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
        <ImageSlider content={disneyChannelImages}></ImageSlider>
      </div>
      <div className="row-container">
        <p className="section-title">Walt Disney Animation Studios</p>
        <ImageSlider content={disneyMovieImages}></ImageSlider>
      </div>
      <div className="row-container">
        <p className="section-title">Star Wars</p>
        <ImageSlider content={starWarsImages}></ImageSlider>
      </div>
    </div>
  );
}
export default Home;

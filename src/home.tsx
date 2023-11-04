import { useEffect, useState } from "react";
import "./home.css";
import ImageSlider from "./image-slider";
import getPosters from "../utils/getPosters";
import { useNavigate } from "react-router-dom";
interface content {
  poster_path: string;
  name: string;
}
function Home() {
  const [disneyChannelImages, updateDisneyChannelImages] = useState<
    Array<content>
  >([]);
  const [disneyMovieImages, updateDisneyMovieImages] = useState<Array<content>>(
    []
  );
  const [starWarsImages, updateStarWarsImages] = useState<Array<content>>([]);
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

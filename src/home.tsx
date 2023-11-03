import { useEffect, useState } from "react";
import "./home.css";
import ImageSlider from "./image-slider";
import getPosters from "../utils/getPosters";
function Home() {
  const [disneyChannelImages, updateDisneyChannelImages] = useState([]);
  const [disneyMovieImages, updateDisneyMovieImages] = useState([]);
  const [starWarsImages, updateStarWarsImages] = useState([]);

  useEffect(() => {
    async function getData() {
      updateDisneyChannelImages(
        await getPosters(
          "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=3475"
        )
      );
      updateDisneyMovieImages(
        await getPosters(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=6125"
        )
      );
      updateStarWarsImages(
        await getPosters(
          "https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=1"
        )
      );
    }
    getData();
  }, []);
  return (
    <div className="home-container">
      <div className="row-container">
        <p className="section-title">Disney Channel</p>
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

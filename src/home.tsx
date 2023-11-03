import { useCallback, useEffect, useState } from "react";
import "./home.css";
import ImageSlider from "./image-slider";
function Home() {
  const [disneyChannelImages, updateDisneyChannelImages] = useState([]);
  const [disneyMovieImages, updateDisneyMovieImages] = useState([]);
  const [starWarsImages, updateStarWarsImages] = useState([]);

  const getPosters = useCallback(async function (url: string) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const posters = data.results
      .map((movie: { poster_path: any }) => movie.poster_path)
      .filter((movie: any) => movie);
    let imageUrls = posters.map(
      (poster: string) => "http://image.tmdb.org/t/p/w500" + poster
    );
    return imageUrls;
  }, []);

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

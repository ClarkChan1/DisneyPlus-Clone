import { useEffect, useState } from "react";
import "./home.css";
import ImageSlider from "./image-slider";
function Home() {
  const [imageArr, updateImageArr] = useState([]);
  useEffect(() => {
    async function getData() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      };
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/11/images",
        options
      );
      const data = await response.json();
      const posters = data.posters.slice(0, 8);

      console.log(posters);
      let imageUrls = posters.map(
        (poster: { file_path: string }) =>
          "http://image.tmdb.org/t/p/w500" + poster.file_path
      );
      updateImageArr(imageUrls);
    }
    getData();
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

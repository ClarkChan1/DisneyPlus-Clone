import { useEffect, useState } from "react";
import "./home.css";
import getPosters from "../utils/getPosters";
import { posterAndName } from "./types";
import ContentRow from "./contentRow";
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
      <ContentRow title="Disney Channel" content={disneyChannelImages} />
      <ContentRow
        title="Walt Disney Animation Studios"
        content={disneyMovieImages}
      />
      <ContentRow title="Star Wars" content={starWarsImages} />
    </div>
  );
}
export default Home;

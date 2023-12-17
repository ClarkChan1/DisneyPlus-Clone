import "./movies.css";
import ContentGrid from "./contentGrid";
import { useEffect, useState } from "react";
import { getWatchlist } from "../utils/handleData";
import { posterAndName } from "./types";
import Dropdown from "./dropdown";

let genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Mystery",
  "Family",
];

function Movies() {
  const [media, updateMedia] = useState<posterAndName[]>([]);
  useEffect(() => {
    let storedData = getWatchlist();
    updateMedia(storedData);
  }, []);

  return (
    <div className="movies-container">
      <div className="title-container">
        <p className="title">Movies</p>
        <Dropdown genres={genres} />
      </div>
      <ContentGrid media={media} />
    </div>
  );
}
export default Movies;

import "./movies.css";
import ContentGrid from "./contentGrid";
import { useState } from "react";
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

let genreMap = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Mystery: 9648,
  Family: 10751,
};

function Movies() {
  const [media, updateMedia] = useState<posterAndName[]>([]);
  // useEffect(() => {
  //   console.log("media changed: ", media);
  // }, [media]);

  return (
    <div className="movies-container">
      <div className="title-container">
        <p className="title">Movies</p>
        <Dropdown
          contentType="movie"
          genres={genres}
          genreMap={genreMap}
          updateMedia={updateMedia}
        />
      </div>
      <ContentGrid media={media} />
    </div>
  );
}
export default Movies;

import "./series.css";
import ContentGrid from "./contentGrid";
import { useState } from "react";
import { posterAndName } from "./types";
import Dropdown from "./dropdown";

let genres = [
  "Action & Adventure",
  "Animation",
  "Comedy",
  "Documentary",
  "Family",
  "Kids",
];

let genreMap = {
  "Action & Adventure": 10759,
  Animation: 16,
  Comedy: 35,
  Documentary: 99,
  Family: 10751,
  Kids: 10762,
};

function Series() {
  const [media, updateMedia] = useState<posterAndName[]>([]);
  // useEffect(() => {
  //   let storedData = getWatchlist();
  //   updateMedia(storedData);
  // }, []);

  return (
    <div className="series-container">
      <div className="title-container">
        <p className="title">Series</p>
        <Dropdown
          contentType="tv"
          genres={genres}
          genreMap={genreMap}
          updateMedia={updateMedia}
        />
      </div>
      <ContentGrid media={media} />
    </div>
  );
}
export default Series;

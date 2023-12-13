import "./watchlist.css";
import ContentGrid from "./contentGrid";
import { useEffect, useState } from "react";
import getPosters from "../utils/getPosters";
import { getWatchlist } from "../utils/handleData";
import { posterAndName } from "./types";

function WatchList() {
  const [media, updateMedia] = useState<posterAndName[]>([]);
  useEffect(() => {
    let storedData = getWatchlist();
    updateMedia(storedData);
  }, []);
  return (
    <div className="watchlist-container">
      <p className="title">Watchlist</p>
      <ContentGrid media={media} />
    </div>
  );
}
export default WatchList;

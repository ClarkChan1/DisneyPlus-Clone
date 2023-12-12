import { useEffect, useState } from "react";
import "./search.css";
import Searchbar from "./searchbar";
import ContentGrid from "./contentGrid";
import { posterAndName } from "./types";
function Search() {
  const [movies, updateMovies] = useState<posterAndName[]>([]);
  const [tv, updateTV] = useState<posterAndName[]>([]);
  const [media, updateMedia] = useState<posterAndName[]>([]);
  useEffect(() => {
    updateMedia(movies.concat(tv));
  }, [movies, tv]);
  return (
    <div className="search-section">
      <Searchbar updateMovies={updateMovies} updateTV={updateTV} />
      <ContentGrid media={media} />
    </div>
  );
}
export default Search;

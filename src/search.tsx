import { useState } from "react";
import "./search.css";
import Searchbar from "./searchbar";
import SearchGrid from "./searchgrid";
import { posterAndName } from "./types";
function Search() {
  const [movies, updateMovies] = useState<posterAndName[]>([]);
  const [tv, updateTV] = useState<posterAndName[]>([]);
  return (
    <div className="search-section">
      <Searchbar updateMovies={updateMovies} updateTV={updateTV} />
      <SearchGrid movies={movies} tv={tv} />
    </div>
  );
}
export default Search;

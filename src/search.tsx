import { useState } from "react";
import "./search.css";
import Searchbar from "./searchbar";
import SearchGrid from "./searchgrid";
function Search() {
  const [movies, updateMovies] = useState<string[]>([]);
  const [tv, updateTV] = useState<string[]>([]);
  return (
    <div className="search-section">
      <Searchbar updateMovies={updateMovies} updateTV={updateTV} />
      <SearchGrid movies={movies} tv={tv} />
    </div>
  );
}
export default Search;

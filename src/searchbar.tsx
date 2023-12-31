import { useEffect, useState, Dispatch, SetStateAction, useRef } from "react";
import "./searchbar.css";
import getPosters from "../utils/getPosters";
import { posterAndName, Search } from "./types";
interface Props {
  updateMovies: Dispatch<SetStateAction<posterAndName[]>>;
  updateTV: Dispatch<SetStateAction<posterAndName[]>>;
}

function Searchbar(props: Props) {
  const [searchText, updateSearchText] = useState("");
  useEffect(() => {
    async function getData() {
      // get movies
      props.updateMovies(
        await getPosters({ contentType: "movie", query: searchText } as Search)
      );
      // get tv series
      props.updateTV(
        await getPosters({ contentType: "tv", query: searchText } as Search)
      );
    }
    getData();
  }, [searchText]);
  return (
    <div className="searchbar-container">
      <input
        className="searchbar"
        type="text"
        placeholder="Search by title, character, or genre"
        onKeyDown={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
        onChange={(e) => {
          updateSearchText(e.target.value);
        }}
      ></input>
      {searchText != "" ? (
        <div
          className="clear-button"
          onClick={() => {
            updateSearchText("");
          }}
        >
          <svg
            aria-hidden="true"
            aria-label="close"
            color="#f9f9f9"
            role="img"
            transform=""
            version="1.1"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            className="x-icon"
          >
            <title></title>
            <path d="M17.9 16.239l8.833-9.085c.255-.266.629-.404 1.01-.404.248 0 .491.056.706.175.641.338.817 1.121.301 1.649l-9.081 9.342 9.08 9.312c.517.53.343 1.311-.313 1.657-.546.287-1.276.2-1.7-.231l-8.835-9.062-8.838 9.064c-.421.428-1.152.516-1.699.229-.655-.346-.829-1.127-.312-1.657l9.08-9.312-9.08-9.341c-.516-.529-.34-1.312.313-1.657.202-.112.445-.168.693-.168.382 0 .755.138 1.007.4l8.836 9.089z"></path>
          </svg>
        </div>
      ) : null}
    </div>
  );
}

export default Searchbar;

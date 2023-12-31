import { Dispatch, SetStateAction, useEffect, useState, useRef } from "react";
import "./dropdown.css";
import { DiscoverGenre, posterAndName } from "./types";
import getPosters from "../utils/getPosters";
interface Props {
  contentType: string;
  genres: string[];
  genreMap: { [key: string]: number };
  updateMedia: Dispatch<SetStateAction<posterAndName[]>>;
}

function Dropdown(props: Props) {
  const [showDropdown, updateShowDropdown] = useState<boolean>(false);
  const [currentGenre, updateCurrentGenre] = useState<string>(props.genres[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const genreButtonRef = useRef<HTMLDivElement>(null);
  function handleGenreChange(
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) {
    let pElement = event.target as HTMLElement;
    updateCurrentGenre(pElement.innerText);
  }

  useEffect(() => {
    async function getData() {
      props.updateMedia(
        await getPosters({
          contentType: props.contentType,
          genre: props.genreMap[currentGenre],
        } as DiscoverGenre)
      );
    }
    getData();
  }, [currentGenre]);

  useEffect(() => {
    function clickOutside(event: MouseEvent) {
      if (
        !dropdownRef.current?.contains(event.target as Node) &&
        !genreButtonRef.current?.contains(event.target as Node) &&
        showDropdown
      ) {
        updateShowDropdown(!showDropdown);
      }
    }
    window.addEventListener("mousedown", clickOutside);

    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, [showDropdown]);

  return (
    <div
      ref={genreButtonRef}
      className="dropdown-container"
      onClick={() => updateShowDropdown(!showDropdown)}
    >
      <p className="category">{currentGenre}</p>
      <svg
        aria-hidden="true"
        aria-label="arrowDown"
        color="#f9f9f9"
        role="img"
        transform=""
        version="1.1"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-icon"
      >
        <title></title>
        <path d="M28.35 11.565c.578-.538 1.433-.355 1.81.325.122.21.182.463.182.72 0 .398-.15.786-.437 1.048L18.93 23.827a1.126 1.126 0 0 1-1.555 0L6.432 13.655c-.468-.438-.563-1.198-.25-1.767.377-.681 1.23-.863 1.809-.325l10.164 9.446 10.195-9.445zM17.957 22.776a.31.31 0 0 1 .391 0l-.194-.181-.197.181zM7.436 12.581c-.006.01 0 .053-.027.028a.07.07 0 0 0 .027-.028zm21.5.024z"></path>
      </svg>
      <div
        ref={dropdownRef}
        className={"dropdown-list " + (showDropdown ? "show-dropdown" : "")}
      >
        {props.genres.map((genre) => (
          <p key={genre} onClick={handleGenreChange}>
            {genre}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;

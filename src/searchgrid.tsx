import { useEffect, useState } from "react";
import "./searchgrid.css";

interface Props {
  movies: string[];
  tv: string[];
}

function SearchGrid(props: Props) {
  const [content, updateContent] = useState<string[]>([]);
  useEffect(() => {
    updateContent(props.movies.concat(props.tv));
  }, [props.movies, props.tv]);
  return (
    <div className="search-grid">
      {content.map((imgUrl) => (
        <img key={imgUrl} className="content-img" src={imgUrl} alt=""></img>
      ))}
    </div>
  );
}
export default SearchGrid;

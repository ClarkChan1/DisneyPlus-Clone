import { useEffect, useState } from "react";
import "./contentGrid.css";
import { useNavigate } from "react-router-dom";
import { posterAndName } from "./types";
interface Props {
  movies: posterAndName[];
  tv: posterAndName[];
}

function ContentGrid(props: Props) {
  const [media, updateMedia] = useState<posterAndName[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    updateMedia(props.movies.concat(props.tv));
  }, [props.movies, props.tv]);
  return (
    <div className="search-grid">
      {media.map((content) => (
        <img
          key={content.poster_path}
          src={content.poster_path}
          alt=""
          className="content-img"
          onClick={() => {
            navigate("/content", {
              state: { id: content.id, contentType: content.contentType },
            });
          }}
        />
      ))}
    </div>
  );
}
export default ContentGrid;

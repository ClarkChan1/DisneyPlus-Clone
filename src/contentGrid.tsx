import "./contentGrid.css";
import { useNavigate } from "react-router-dom";
import { posterAndName } from "./types";
interface Props {
  media: posterAndName[];
}
function ContentGrid(props: Props) {
  const navigate = useNavigate();
  return (
    <div className="search-grid">
      {props.media.map((content) => (
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

import "./contentRow.css";
import ImageSlider from "./image-slider";
import "./types";
import { posterAndName } from "./types";
interface Props {
  content: posterAndName[];
  title: string;
}
function ContentRow(props: Props) {
  return (
    <div className="content-row-container">
      <p className="section-title">{props.title}</p>
      <ImageSlider content={props.content}></ImageSlider>
    </div>
  );
}
export default ContentRow;

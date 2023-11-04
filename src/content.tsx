import { useLocation } from "react-router-dom";

function Content() {
  const location = useLocation();
  return <div>{location.state.title}</div>;
}
export default Content;

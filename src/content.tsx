import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getContentInfo from "../utils/getContentInfo";
import { contentInfo } from "./types";
import "./content.css";

function Content() {
  const location = useLocation();
  const [contentInfo, updateContentInfo] = useState<contentInfo>();
  useEffect(() => {
    async function getData() {
      updateContentInfo(
        await getContentInfo(location.state.id, location.state.contentType)
      );
    }
    getData();
  }, []);
  return (
    <div className="content-container">
      <div className="backdrop-container">
        <img className="backdrop" src={contentInfo?.backdrop_path} alt="" />
        <div className="fade-effect"></div>
      </div>
      <div className="logo-and-description-container">
        <img className="logo" src={contentInfo?.logo_path} alt="" />
        <p>{contentInfo?.description}</p>
      </div>
    </div>
  );
}
export default Content;

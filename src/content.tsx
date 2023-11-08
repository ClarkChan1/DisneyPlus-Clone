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
        <div className="buttons-container">
          <div className="play-button">
            <svg
              aria-hidden="true"
              aria-label="play"
              color="white"
              role="img"
              transform=""
              version="1.1"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              className="play-icon"
            >
              <title></title>
              <path d="M27.147 20.421L11.27 29.274A2.2 2.2 0 0 1 8 27.353V9.647a2.2 2.2 0 0 1 3.271-1.921l15.876 8.852a2.2 2.2 0 0 1 0 3.843z"></path>
            </svg>
            <p>Play</p>
          </div>
          <div className="watchlist-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0.25 0.25 25.5 25.5"
              className="button-icon"
            >
              <path d="M22.85 10.1H15.9V3.15a2.9 2.9 0 0 0-5.8 0v6.95H3.15a2.9 2.9 0 0 0 0 5.8h6.95v6.95a2.9 2.9 0 0 0 5.8 0V15.9h6.95a2.9 2.9 0 1 0 0-5.8Z" />
            </svg>
          </div>
        </div>
        <p>{contentInfo?.description}</p>
      </div>
    </div>
  );
}
export default Content;

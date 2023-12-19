import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getContentInfo from "../utils/getContentInfo";
import getPosters from "../utils/getPosters";
import { contentInfo, posterAndName, Similar } from "./types";
import {
  addToWatchlist,
  checkWatchlist,
  removeFromWatchlist,
} from "../utils/handleData";
import ImageSlider from "./image-slider";
import "./contentPage.css";
function ContentPage() {
  const location = useLocation();
  const [contentInfo, updateContentInfo] = useState<contentInfo>();
  const [similarImages, updateSimilarImages] = useState<posterAndName[]>([]);
  const [inWatchlist, updateInWatchlist] = useState<boolean>(false);
  useEffect(() => {
    async function getData() {
      updateContentInfo(
        await getContentInfo(location.state.id, location.state.contentType)
      );
      updateSimilarImages(
        await getPosters({
          contentType: location.state.contentType,
          id: "" + location.state.id,
        } as Similar)
      );
    }
    getData();
    console.log("state: ", location.state.id, location.state.contentType);
    updateInWatchlist(
      checkWatchlist(location.state.id, location.state.contentType)
    );
  }, [location]);
  return (
    <div className="content-container">
      <div className="backdrop-container">
        <img className="backdrop" src={contentInfo?.backdrop_path} alt="" />
        <div className="fade-effect"></div>
      </div>
      <div className="content-wrapper">
        <div className="logo-and-description-container">
          <img className="logo" src={contentInfo?.logo_path} alt="" />
          <div className="genre-container">
            {contentInfo?.genres.map((genre) => (
              <p key={genre}>{genre}</p>
            ))}
          </div>
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

            <div
              className={
                "watchlist-button " + (inWatchlist ? "check-button" : "")
              }
              onClick={() => {
                let thumbnailInfo: posterAndName = {
                  poster_path: location.state.poster_path,
                  id: location.state.id,
                  contentType: location.state.contentType,
                };
                if (inWatchlist) {
                  removeFromWatchlist(thumbnailInfo);
                  updateInWatchlist(false);
                } else {
                  addToWatchlist(thumbnailInfo);
                  updateInWatchlist(true);
                }
              }}
            >
              {inWatchlist ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  className="check-icon"
                >
                  <path
                    fill="#0072D2"
                    d="M12.935 26.59a1.472 1.472 0 0 0 2.038 0l13.105-14.452a1.37 1.37 0 0 0 0-1.978 1.472 1.472 0 0 0-2.038 0L13.954 23.63 9.21 19.018a1.472 1.472 0 0 0-2.038 0 1.37 1.37 0 0 0 0 1.978l5.763 5.594z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0.25 0.25 25.5 25.5"
                  className="button-icon"
                >
                  <path d="M22.85 10.1H15.9V3.15a2.9 2.9 0 0 0-5.8 0v6.95H3.15a2.9 2.9 0 0 0 0 5.8h6.95v6.95a2.9 2.9 0 0 0 5.8 0V15.9h6.95a2.9 2.9 0 1 0 0-5.8Z" />
                </svg>
              )}
            </div>
          </div>
          <p className="description">{contentInfo?.description}</p>
        </div>
        <div className="suggested-container">
          <p>Suggested</p>
          <div className="line-break"></div>
          <ImageSlider content={similarImages} />
        </div>
      </div>
    </div>
  );
}
export default ContentPage;

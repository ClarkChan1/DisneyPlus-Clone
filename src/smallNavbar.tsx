import { useNavigate } from "react-router-dom";
import "./smallNavbar.css";
interface Props {
  scrollY: number;
  profilePic: string;
}
function SmallNavbar(props: Props) {
  const navigate = useNavigate();
  return (
    <div
      className={
        "small-nav-bar-container " + (props.scrollY != 0 ? "scrolled" : "")
      }
    >
      <div className="nav-bar-sections">
        <img src="images/logo.png" alt="" className="logo" />
        <div
          className="section-container"
          onClick={() => {
            navigate("/");
          }}
        >
          <svg
            aria-hidden="true"
            aria-label="home"
            color="#f9f9f9"
            role="img"
            transform=""
            version="1.1"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            data-route="HOME"
            className="section-icon"
          >
            <title></title>
            <path d="M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z"></path>
          </svg>
        </div>
        <div
          className="section-container"
          onClick={() => {
            navigate("/search");
          }}
        >
          <svg
            aria-hidden="true"
            aria-label="search"
            color="#f9f9f9"
            role="img"
            transform=""
            version="1.1"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            data-route="SEARCH"
            className="section-icon"
          >
            <title></title>
            <path d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 0 1 0 2.829l-.174.173a2 2 0 0 1-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 1 0 0-13.794 6.897 6.897 0 0 0 0 13.794z"></path>
          </svg>
        </div>
        <div
          className="section-container"
          onClick={() => {
            navigate("/watchlist");
          }}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45.402 45.402"
            className="section-icon plus-icon"
          >
            <g>
              <path
                d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
              />
            </g>
          </svg>
        </div>
        <div className="extra-sections">
          <svg
            aria-hidden="true"
            aria-label="more"
            color="#f9f9f9"
            role="img"
            transform=""
            version="1.1"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            className="section-icon"
          >
            <title></title>
            <path d="M19.53 28.827h-2.933a1.048 1.048 0 0 1-1.048-1.047v-2.933c0-.579.47-1.048 1.048-1.048h2.933c.578 0 1.047.47 1.047 1.048v2.933c0 .578-.469 1.047-1.047 1.047zm0-8.799h-2.933a1.048 1.048 0 0 1-1.048-1.047v-2.933c0-.579.47-1.048 1.048-1.048h2.933c.578 0 1.047.469 1.047 1.048v2.933c0 .578-.469 1.047-1.047 1.047zm0-8.8h-2.933a1.048 1.048 0 0 1-1.048-1.047V7.248c0-.578.47-1.047 1.048-1.047h2.933c.578 0 1.047.469 1.047 1.047v2.933c0 .579-.469 1.048-1.047 1.048z"></path>
          </svg>
          <div className="section-dropdown">
            <div className="row-container">
              <svg
                aria-hidden="true"
                aria-label="originals"
                color="#f9f9f9"
                role="img"
                transform=""
                version="1.1"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                data-route="ORIGINALS"
                className="section-icon"
              >
                <title></title>
                <path d="M17.625 26.028L10.44 30l1.373-8.412L6 15.631l8.033-1.228 3.592-7.653 3.592 7.653 8.033 1.228-5.813 5.957L24.81 30z"></path>
              </svg>
              <p
                className="section-title"
                onClick={() => {
                  navigate("/originals");
                }}
              >
                Originals
              </p>
            </div>
            <div className="row-container">
              <svg
                aria-hidden="true"
                aria-label="movies"
                color="#f9f9f9"
                role="img"
                transform=""
                version="1.1"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                data-route="MOVIES"
                className="section-icon"
              >
                <title></title>
                <path d="M24.71 20.07a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m-12.262 0a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m6.173-10.31a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m0 12.262a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m-1.544-4.629a.846.846 0 1 0-1.197 1.196.846.846 0 0 0 1.197-1.196m18.06-.644c-3.33 6.913-8.165 9.928-11.635 11.24-2.57.971-4.762 1.178-5.949 1.208-.348.032-.698.053-1.052.053C10.287 29.25 5.25 24.213 5.25 18S10.287 6.75 16.5 6.75c6.214 0 11.25 5.037 11.25 11.25a11.19 11.19 0 0 1-2.493 7.054c2.832-1.612 5.844-4.382 8.138-9.143a.968.968 0 0 1 1.742.838"></path>
              </svg>
              <p
                className="section-title"
                onClick={() => {
                  navigate("/movies");
                }}
              >
                Movies
              </p>
            </div>
            <div className="row-container">
              <svg
                aria-hidden="true"
                aria-label="series"
                color="#f9f9f9"
                role="img"
                transform=""
                version="1.1"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                data-route="SERIES"
                className="section-icon"
              >
                <title></title>
                <path d="M18.84 11.965h6.722a4 4 0 0 1 4 4V26a4 4 0 0 1-4 4H10.375a4 4 0 0 1-4-4V15.965a4 4 0 0 1 4-4h6.211l-3.981-3.981a1.162 1.162 0 1 1 1.643-1.644l3.465 3.465 3.464-3.465a1.162 1.162 0 0 1 1.644 1.644l-3.982 3.981zm6.428 7.73a1.718 1.718 0 1 0 0-3.436 1.718 1.718 0 0 0 0 3.436zm0 6.011a1.718 1.718 0 1 0 0-3.435 1.718 1.718 0 0 0 0 3.435z"></path>
              </svg>
              <p
                className="section-title"
                onClick={() => {
                  navigate("/series");
                }}
              >
                Series
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="profile-container" src={props.profilePic}></img>
      <div className="dropdown">
        <p onClick={() => navigate("/edit-profile")}>Edit Profile</p>
      </div>
    </div>
  );
}
export default SmallNavbar;

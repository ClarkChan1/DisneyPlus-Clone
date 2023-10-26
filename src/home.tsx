import "./home.css";
import ImageSlider from "./image-slider";
function Home() {
  return (
    <div className="home-container">
      <div className="row-container">
        <p className="section-title">Animated Movies</p>
        <ImageSlider></ImageSlider>
      </div>
      <div className="row-container">
        <p className="section-title">Walt Disney Animation Studios</p>
        <div className="content-container">
          <img src="" alt="" className="content-img" />
          <img src="" alt="" className="content-img" />
          <img src="" alt="" className="content-img" />
        </div>
      </div>
      <div className="row-container">
        <p className="section-title">Star Wars</p>
        <div className="content-container">
          <img src="" alt="" className="content-img" />
          <img src="" alt="" className="content-img" />
          <img src="" alt="" className="content-img" />
        </div>
      </div>
    </div>
  );
}
export default Home;

import "./image-slider.css";
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
function ImageSlider() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    // Optional parameters
    direction: "horizontal",
    loop: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="../images/clone-wars-pic.jpg"
            alt=""
            className="content-img"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="../images/clone-wars-pic.jpg"
            alt=""
            className="content-img"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="../images/clone-wars-pic.jpg"
            alt=""
            className="content-img"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="../images/clone-wars-pic.jpg"
            alt=""
            className="content-img"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="../images/clone-wars-pic.jpg"
            alt=""
            className="content-img"
          />
        </div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
export default ImageSlider;

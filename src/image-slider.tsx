import "./image-slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import "swiper/css";

function ImageSlider() {
  const swiperRef = useRef<SwiperType>();
  return (
    <Swiper
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      slidesPerView={1.5}
      centeredSlides={true}
      spaceBetween={30}
    >
      <SwiperSlide>
        <img
          src="../images/clone-wars-pic.jpg"
          alt=""
          className="content-img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../images/clone-wars-pic.jpg"
          alt=""
          className="content-img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../images/clone-wars-pic.jpg"
          alt=""
          className="content-img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../images/clone-wars-pic.jpg"
          alt=""
          className="content-img"
        />
      </SwiperSlide>
      <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
      <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
    </Swiper>
  );
}
export default ImageSlider;

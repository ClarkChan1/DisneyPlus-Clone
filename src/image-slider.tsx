import "./image-slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";
import "swiper/css";
import { posterAndName } from "./types";
import { useNavigate } from "react-router-dom";

interface Props {
  content: posterAndName[];
}

function ImageSlider(props: Props) {
  const swiperRef = useRef<SwiperType>();
  const [showPrevButton, updateShowPrevButton] = useState(true);
  const [showNextButton, updateShowNextButton] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="total-container">
      <div
        className={"nav-button " + (showPrevButton ? "" : "hide")}
        onClick={() => {
          const currIndex = swiperRef.current?.realIndex || 0;
          const rowLength = swiperRef.current?.slidesPerViewDynamic() || 2;
          swiperRef.current?.slideTo(currIndex - Math.trunc(rowLength));
        }}
      >
        <svg
          aria-hidden="true"
          aria-label="arrowLeft"
          color="white"
          role="img"
          transform=""
          version="1.1"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-icon"
        >
          <title></title>
          <path d="M22.324 28.008c.537.577.355 1.433-.326 1.809a1.44 1.44 0 0 1-.72.183c-.398 0-.786-.151-1.048-.438L10.06 18.588a1.126 1.126 0 0 1 0-1.555L20.233 6.09c.438-.468 1.198-.564 1.767-.25.681.377.863 1.23.325 1.808l-9.446 10.164 9.446 10.196zM11.112 17.615a.31.31 0 0 1 0 .391l.182-.195-.182-.196zM21.308 7.094c-.01-.006-.053 0-.029-.027a.07.07 0 0 0 .029.027zm-.025 21.499a.95.95 0 0 1-.006-.008l.006.008z"></path>
        </svg>
      </div>

      <Swiper
        className="swiper-container"
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 2 },
          769: { slidesPerView: 3 },
          1025: { slidesPerView: 4 },
          1441: { slidesPerView: 5 },
        }}
        onProgress={(swiper, progress) => {
          //   console.log("progress: ", progress);
          if (progress == 0) {
            // first slide
            updateShowPrevButton(false);
            updateShowNextButton(true);
          } else if (progress == 1) {
            // last slide
            updateShowNextButton(false);
            updateShowPrevButton(true);
          } else {
            updateShowNextButton(true);
            updateShowPrevButton(true);
          }
        }}
      >
        {props.content.map((content) => (
          <SwiperSlide key={content.poster_path}>
            <img
              src={content.poster_path}
              alt=""
              className="content-img"
              onClick={() => {
                navigate("/content", {
                  state: { id: content.id, contentType: content.contentType },
                });
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={"nav-button " + (showNextButton ? "" : "hide")}
        onClick={() => {
          const currIndex = swiperRef.current?.realIndex || 0;
          const rowLength = swiperRef.current?.slidesPerViewDynamic() || 2;
          swiperRef.current?.slideTo(currIndex + Math.trunc(rowLength));
          //   swiperRef.current?.slideTo(currIndex + 1);
        }}
      >
        <svg
          aria-hidden="true"
          aria-label="arrowRight"
          color="white"
          role="img"
          transform=""
          version="1.1"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-icon"
        >
          <title></title>
          <path d="M13.065 7.65c-.538-.578-.355-1.433.325-1.81a1.44 1.44 0 0 1 .72-.182c.398 0 .786.15 1.048.437L25.327 17.07a1.126 1.126 0 0 1 0 1.555L15.155 29.568c-.438.468-1.198.563-1.767.25-.681-.377-.863-1.23-.325-1.809l9.446-10.164L13.065 7.65zm11.211 10.393a.31.31 0 0 1 0-.391l-.181.194.181.197zM14.081 28.564c.01.006.053 0 .028.027a.07.07 0 0 0-.028-.027zm.024-21.5a.95.95 0 0 1 .007.008l-.007-.007z"></path>
        </svg>
      </div>
    </div>
  );
}
export default ImageSlider;

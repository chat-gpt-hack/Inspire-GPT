import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
// Types
// Components/Assets

// ? * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
export default function SwiperCarousel({ slidesArr }) {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    function updateViewportWidth() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateViewportWidth);

    updateViewportWidth();
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  return (
    <div className="w-[80vw] mx-auto my-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={viewportWidth > 700 ? 3 : 1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {slidesArr.map((slide) => (
          <SwiperSlide key={slide}>
            <img
              src={slide}
              alt={slide}
              className="rounded-md w-auto h-[450px] object-cover hover:opacity-20 transition duration-300 ease-in-out hover:scale-105"
            />
          </SwiperSlide>
        ))}
        <div className="flex flex-col justify-center items-center absolute top-0 w-full h-full gap-10 -z-10">
          <p className="uppercase font-bold text-center">{slide.hoverText}</p>
          <p className="uppercase font-bold text-center">{slide.hoverText2}</p>
        </div>
        <BsArrowLeftCircleFill
          className="swiper-button-prev rounded-full fill-orange-500"
          size={32}
        />
        <BsArrowRightCircleFill
          className="swiper-button-next rounded-full fill-orange-500"
          size={32}
        />
      </Swiper>
    </div>
  );
}

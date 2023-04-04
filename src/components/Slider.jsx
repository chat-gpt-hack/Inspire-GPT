import React from "react";
import { SlideImage, StyledSlider } from "./SlideImage";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
  return (
    <div className="slider">
      <FaChevronLeft className="left-arrow" />
      <FaChevronRight className="right-arrow" />
      <StyledSlider>
        {slides.map((slide, index) => (
          <SlideImage
            key={index}
            src={slide.url}
            alt={slide.alt}
            currentIndex={index}
            content={slide.content}
          />
        ))}
      </StyledSlider>
    </div>
  );
};

export default Slider;

import React from "react";

const SlideImage = ({ src, alt, style, currentIndex, content }) => (
  <div
    className={`slide ${currentIndex === index ? "active" : ""}`}
    style={{
      backgroundImage: `url(${src})`,
      ...style,
    }}
  >
    <div className="content">{content}</div>
  </div>
);

const StyledSlider = ({ children }) => (
  <div
    className="styled-slider"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "relative",
    }}
  >
    {children}
  </div>
);

export { SlideImage, StyledSlider };

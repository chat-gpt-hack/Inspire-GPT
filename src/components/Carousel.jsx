import "../styles/carousel.scss";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel(props) {
  const { imageUrlsArr, selectHandler } = props;
  const [carouselIndex, setCarouselIndex] = useState(0);

  // * Helpers
  const getNextImgIdx = () => {
    const lastIndex = imageUrlsArr.length - 1;
    const shouldResetIndex = carouselIndex === lastIndex;
    const index = shouldResetIndex ? 0 : carouselIndex + 1;
    return index;
  };

  const getPrevImgIdx = () => {
    const lastIndex = imageUrlsArr.length - 1;
    const shouldResetIndex = carouselIndex === 0;
    const index = shouldResetIndex ? lastIndex : carouselIndex - 1;
    return index;
  };

  // * logic
  const prevImage = imageUrlsArr[getPrevImgIdx()];
  const nextImage = imageUrlsArr[getNextImgIdx()];
  const currImage = imageUrlsArr[carouselIndex];

  const prevHandler = () => {
    const index = getPrevImgIdx();
    setCarouselIndex(index);
  };

  const nextHandler = () => {
    const index = getNextImgIdx();
    setCarouselIndex(index);
  };

  return (
    <section className="carousel">
      <div className="rowImg">
        <img
          className="preview"
          src={prevImage}
          alt="missing img"
          onClick={() => selectHandler(prevImage)}
        />
        <div className="currImage-container">
          <img
            src={currImage}
            alt="missing img"
            onClick={() => selectHandler(currImage)}
          />
        </div>
        <img
          className="preview"
          src={nextImage}
          alt="missing img"
          onClick={() => selectHandler(nextImage)}
        />
      </div>

      <button onClick={prevHandler} className="prev-btn">
        <FaChevronLeft style={{ fontSize: "500%" }} />
      </button>
      <button onClick={nextHandler} className="next-btn">
        <FaChevronRight style={{ fontSize: "500%" }} />
      </button>
    </section>
  );
}

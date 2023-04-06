import { useState, useEffect } from "react";
import { getImagesArr } from "../utils/fetchData.js";
import "../styles/carousel.scss"; // import your carousel CSS file

function ImageCarousel({ athlete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const urls = await getImagesArr(athlete); // use athlete as the query string
      setImageUrls(urls);
    }
    fetchData();
  }, [athlete]); // re-fetch images whenever athlete changes

  const previousSlide = () => {
    const lastIndex = imageUrls.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = imageUrls.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="slides">
        {imageUrls.length > 0 && (
          <div className="slide">
            <img
              src={imageUrls[currentIndex]}
              alt={`Image ${currentIndex}`}
            />
          </div>
        )}
      </div>
      <div className="buttons">
        <button onClick={previousSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default ImageCarousel;

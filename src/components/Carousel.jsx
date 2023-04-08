import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel(props) {
  const { currImage, nextImage, prevImage, selectHandler, quote, athlete } = props;

  return (
    <section className="carousel">
      {/* Move the prev button outside the img tag and before the img tag */}
      <button onClick={prevImage} className="prev">
          <FaChevronLeft />
      </button>
      <img
        src={currImage}
        alt="missing img"
        onClick={() => selectHandler(currImage)} 
        
        />
        {/* Move the next button outside the img tag and after the img tag */}
      <button onClick={nextImage} className="next">
          <FaChevronRight />
      </button>
        <div className="quote-container">
          <p className="quote">{quote || "no quote"}</p>
          <p className="author">{athlete || "no athlete"}</p>
      </div>
    </section>
  );
}

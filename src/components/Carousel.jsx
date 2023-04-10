import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/carousel.scss";

export default function Carousel(props) {
  const { currImage, nextImage, prevImage, selectHandler, quote, athlete, nextHandler, prevHandler } = props;

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
        {/*<div className="quote-container">
            <p className="quote">{quote || "no quote"}</p>
            <p className="author">{athlete || "no athlete"}</p>
          </div>*/}
        </div>
        <img
          className="preview"
          src={nextImage}
          alt="missing img"
          onClick={() => selectHandler(nextImage)}
        />
      </div>
      <article>
        <button onClick={prevHandler} className="prev-btn">
          <FaChevronLeft style={{ fontSize: "500%" }} />
        </button>
        <button onClick={nextHandler} className="next-btn">
          <FaChevronRight style={{ fontSize: "500%" }} />
        </button>
      </article>
    </section>
  );
}
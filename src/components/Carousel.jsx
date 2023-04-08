import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/carousel.scss";
export default function Carousel(props) {
  const { currImage, nextImage, prevImage, selectHandler, quote, athlete } = props;

return (
    <section className="carousel">

      <div className='rowImg'>
        <img
            src={prevImage}
            alt="missing img"
            onClick={() => selectHandler(prevImage)}
        />
        <img
            src={currImage}
            alt="missing img"
            onClick={() => selectHandler(currImage)}
        />
        <img
            src={nextImage}
            alt="missing img"
            onClick={() => selectHandler(nextImage)}
        />
      
      <article>
        <button onClick={prevImage} className="prev-btn">
          <FaChevronLeft style={{ fontSize: "500%" }} />
        </button>
        <button onClick={nextImage} className="next-btn">
          <FaChevronRight style={{ fontSize: "500%" }} />
        </button>
      </article>

      <div className="quote-container">
          <p className="quote">{quote || "no quote"}</p>
          <p className="author">{athlete || "no athlete"}</p>
        </div>
      </div>
    </section>
  );
}
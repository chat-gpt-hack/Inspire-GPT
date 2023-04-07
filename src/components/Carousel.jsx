import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/carousel.scss";

export default function Carousel(props) {
  const { currImage, nextImage, prevImage, selectHandler } = props;

  return (
    <section className="carousel">
      <article className="buttons">
        <button onClick={prevImage} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextImage} className="next-btn">
          <FaChevronRight />
        </button>
      </article>
    <div className='rowImg'>
      <img
        src={currImage}
        alt="missing img"
        onClick={() => selectHandler(currImage)}
      />

</div>
      
    </section>
  );
}

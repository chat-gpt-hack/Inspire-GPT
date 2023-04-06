import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel(props) {
  const { currImage, nextImage, prevImage, selectHandler } = props;

  return (
    <section className="carousel">
      <img
        src={currImage}
        alt="missing img"
        onClick={() => selectHandler(currImage)}
      />

      <article className="buttons">
        <button onClick={prevImage} className="prev">
          <FaChevronLeft />
        </button>
        <button onClick={nextImage} className="next">
          <FaChevronRight />
        </button>
      </article>
    </section>
  );
}

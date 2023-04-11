import "../styles/quoted-image.scss";

export default function QuotedImage({ image, quote, athlete }) {
  // ------------------------------------
  return (
    <section className="quoted-img">
      <div className="wrapper">
        <p className="quote">{quote}</p>
        <p className="athlete">{athlete}</p>
        <img className="img" src={image} alt="image with quote" />
      </div>
    </section>
  );
}

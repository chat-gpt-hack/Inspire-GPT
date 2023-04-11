import "../styles/quoted-image.scss";

export default function QuotedImage({ image, quote }) {
  // ------------------------------------
  return (
    <section className="quoted-img">
      <div className="wrapper">
        <p className="quote">{quote}</p>
        <img className="img" src={image} alt="image with quote" />
      </div>
    </section>
  );
}

import "../styles/quoted-image.scss";

export default function QuotedImage({ image, quote }) {
  // ------------------------------------
  return (
    <section className="quoted-img">
      <p className="quote">{quote}</p>
      <img src={image} alt="image with quote" />
    </section>
  );
}

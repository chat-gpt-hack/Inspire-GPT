import "../styles/image-options.scss";

export default function ImageOptions({ imagesArr, updateCurrImage }) {
  return (
    <div className="options-wrapper">
      {imagesArr.length > 1 &&
        imagesArr.map((img, a) => (
          <div
            key={a}
            className="img-option"
            onClick={() => updateCurrImage(img)}
          >
            <img src={img} alt={"option n " + a} />
          </div>
        ))}
    </div>
  );
}

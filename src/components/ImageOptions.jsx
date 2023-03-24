import "../styles/imageOptions.scss";

export default function ImageOptions({ imagesArr, updateCurrImage }) {
  return (
    <div className="options-wrapper">
      {imagesArr.length > 1 &&
        imagesArr.map((img, i) => (
          <div
            key={i}
            className="img-option"
            onClick={() => updateCurrImage(img)}
          >
            <img src={img} alt={"option n " + i} />
          </div>
        ))}
    </div>
  );
}

import { useState } from "react";
import Header from "./components/Header";
import { getImagesArr, getQuote } from "./utils/fetchData";
import famousList from "./utils/famousList";
import ImageOptions from "./components/ImageOptions";
// import Copy from "./components/Copy";

export default function App() {
  const [quote, setQuote] = useState("");
  const [athlete, setAthlete] = useState("anonymous");
  const [imageUrlsArr, setImageUrlsArr] = useState([""]);
  const [currImage, setCurrImage] = useState("");

  const generateHandler = async () => {
    // * Add a new function in utils to randomize the name
    const randomIndex = Math.floor(Math.random() * famousList.length);
    const randomFamousObj = famousList[randomIndex];

    // ? Image 1st since it's faster - optimize it with Promise.All later
    const inspireImgArr = await getImagesArr(randomFamousObj.sport);
    console.log(inspireImgArr);
    setImageUrlsArr(inspireImgArr);
    setCurrImage(inspireImgArr[0]);

    const res = await getQuote();
    // first item is the quote, second could be the author or nothing
    setQuote(res[0]);
    setAthlete(randomFamousObj.name);
  };

  const updateCurrImage = (src) => {
    setCurrImage(src);
  };
  return (
    <main className="main">
      <Header title={"Inspire Bot 3000"} />

      <div className="quote-container">
        <div className="img-bg" style={{ background: `url(${currImage})` }}>
          <p className="quote">{quote || "no quote"}</p>
          <p className="author">{athlete}</p>
        </div>
      </div>
      <button onClick={generateHandler}> Generate Quote </button>

      <ImageOptions className="imgArr"
        imagesArr={imageUrlsArr}
        updateCurrImage={updateCurrImage}
      />

    </main>
  );
}

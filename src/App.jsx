import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getImagesArr, getQuote } from "./utils/fetchData";
import famousList from "./utils/famousList";
import ImageOptions from "./components/ImageOptions";
import ImgCanvas from "./components/ImgCanvas";
>>>>>>>>> Temporary merge branch 2

export default function App() {
    const [quote, setQuote] = useState("");
    const [athlete, setAthlete] = useState("anonymous");
    const [imageUrlsArr, setImageUrlsArr] = useState([""]);
    const [currImage, setCurrImage] = useState("");

    const generateHandler = async() => {
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
    setAthlete(randomFamousObj.name); // Fixed this line to use the randomFamousObj's name property
  };

  const updateCurrImage = (src) => {
    setCurrImage(src);
  };
  return (
    <main className="main">
      <Header title={"Inspire Bot 3000"} />

      <div className="quote-container">
        <img src={currImage} alt="missing main image" />
        <div className="quote-text">
          <p className="quote">{quote || "no quote"}</p>
          <p className="author">{athlete || "no athlete"}</p>
        </div>
      </div>

      <ImageOptions className="imgArr"
        imagesArr={imageUrlsArr}
        updateCurrImage={(src) => setCurrImage(src)}
      />

<<<<<<<<< Temporary merge branch 1
=========
      <ImgCanvas imageSrc={currImage} text={quote} />
      <button onClick={generateHandler}> Generate Quote </button>
>>>>>>>>> Temporary merge branch 2
    </main>
  );
}
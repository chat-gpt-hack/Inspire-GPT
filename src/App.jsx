import { useEffect, useRef, useState } from "react";
import { getApiOrHardcodedQuote, getImagesArr } from "./utils/fetchData";
import famousList from "./utils/famousList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageOptions from "./components/ImageOptions";
import ImgCanvas from "./components/ImgCanvas";
import Carousel from "./components/Carousel";

export default function App() {
  const [quote, setQuote] = useState("");
  const [athlete, setAthlete] = useState("anonymous");
  const [imageUrlsArr, setImageUrlsArr] = useState([]);
  const [currImage, setCurrImage] = useState("");

  const generateHandler = async () => {
    // * Add a new function in utils to randomize the name
    const randomIndex = Math.floor(Math.random() * famousList.length);
    const randomFamousObj = famousList[randomIndex];

    // ? Image 1st since it's faster - optimize it with Promise.All later
    const inspireImgArr = await getImagesArr(randomFamousObj.sport);

    // transform to set  & then go back to arr
    const uniqueImgs = [...new Set(inspireImgArr)];
    setImageUrlsArr(uniqueImgs);
    setCurrImage(inspireImgArr[0]);

    const res = await getApiOrHardcodedQuote(randomFamousObj.name);
    // first item is the quote, second could be the author or nothing
    setQuote(res);
    setAthlete(randomFamousObj.name);
  };

  const didMount = useRef(false);
  useEffect(() => {
    // extra stuff to avoid weird things on react18 (double rendering)
    if (!didMount.current) {
      // executes the function as soon as the page loads
      // generateHandler();
      didMount.current = true;
    }
  }, []);

  return (
    <main className="main">
      {/* <Header />

      <div className="quote-container">
        <img src={currImage} alt="missing main image" />
        <div className="quote-text">
          <p className="quote">{quote || "no quote"}</p>
          <p className="author">{athlete || "no athlete"}</p>
        </div>
      </div>

      <button className="main-btn" onClick={generateHandler}>
        Generate Quote
      </button> */}

      <Carousel slidesArr={imageUrlsArr} />

      <button onClick={generateHandler}> Generate Quote </button>

      {/* <Footer /> */}
      {/* <ImgCanvas imageSrc={currImage} text={quote} /> */}
    </main>
  );
}

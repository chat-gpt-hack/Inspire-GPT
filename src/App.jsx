import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getApiOrHardcodedQuote, getImagesArr } from "./utils/fetchData";
import famousList from "./utils/famousList";
import ImageOptions from "./components/ImageOptions";
import ImgCanvas from "./components/ImgCanvas";
import Carousel from "./components/Carousel";

export default function App() {
  const [quote, setQuote] = useState("");
  const [athlete, setAthlete] = useState("anonymous");
  const [imageUrlsArr, setImageUrlsArr] = useState([""]);
  const [currImage, setCurrImage] = useState("");
  const [carrouselIndex, setCarrouselIndex] = useState(0);

  const generateHandler = async () => {
    // * Add a new function in utils to randomize the name
    const randomIndex = Math.floor(Math.random() * famousList.length);
    const randomFamousObj = famousList[randomIndex];

    // ? Image 1st since it's faster - optimize it with Promise.All later
    const inspireImgArr = await getImagesArr(randomFamousObj.sport);
    // console.log(inspireImgArr);
    setImageUrlsArr(inspireImgArr);
    setCurrImage(inspireImgArr[0]);

    const res = await getApiOrHardcodedQuote(randomFamousObj.name);
    // first item is the quote, second could be the author or nothing
    setQuote(res);
    setAthlete(randomFamousObj.name);
  };

  // * carousel stuff
  const previousSlide = () => {
    const lastIndex = imageUrlsArr.length - 1;
    const shouldResetIndex = carrouselIndex === 0;
    const index = shouldResetIndex ? lastIndex : carrouselIndex - 1;
    setCarrouselIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = imageUrlsArr.length - 1;
    const shouldResetIndex = carrouselIndex === lastIndex;
    const index = shouldResetIndex ? 0 : carrouselIndex + 1;
    setCarrouselIndex(index);
  };

  // fetch quote & images as soon as loads
  const didMount = useRef(false);
  useEffect(() => {
    // extra stuff to avoid weird things on react18 (double rendering)
    if (!didMount.current) {
      // executes the function as soon as the page loads
      generateHandler();
      didMount.current = true;
    }
  }, []);

  return (
    <main className="main">
      <Header />

      <div className="quote-container">
        <img src={currImage} alt="missing main" />
        <div className="quote-text">
          <p className="quote">{quote || "no quote"}</p>
          <p className="author">{athlete || "no athlete"}</p>
        </div>
      </div>
      <button onClick={generateHandler}> Generate Quote </button>

      <Carousel
        currImage={imageUrlsArr[carrouselIndex]}
        prevImage={previousSlide}
        nextImage={nextSlide}
        selectHandler={(imgSrc) => setCurrImage(imgSrc)}
      />

      {/* <ImgCanvas imageSrc={currImage} text={quote} /> */}
      <button onClick={generateHandler}> Generate Quote </button>

      <Footer />
    </main>
  );
}

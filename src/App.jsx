import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { getApiOrHardcodedQuote, getImagesArr } from "./utils/fetchData";
import famousList from "./utils/famousList";
import ImageOptions from "./components/ImageOptions";
import ImgCanvas from "./components/ImgCanvas";
import Carousel from "./components/Carousel";
import Loader from "./components/Loader";
import QuotedImage from "./components/QuotedImage";
import Hackathon from './components/Hackathon';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState("");
  const [athlete, setAthlete] = useState("anonymous");
  const [imageUrlsArr, setImageUrlsArr] = useState([""]);
  const [currImage, setCurrImage] = useState("");

  const generateHandler = async () => {
    setIsLoading(true);

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

    setIsLoading(false);
  };

  // * carousel stuff
  // Helpers

  // fetch quote & images as soon as loads
  const didMount = useRef(false);
  useEffect(() => {
    // extra stuff to avoid weird things on react18 (double rendering)
    if (!didMount.current) {
      // executes the function as soon as the page loads
      generateHandler().then(() => setIsLoading(false));
      didMount.current = true;
    }
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <main className={isLoading ? "main fade-out" : "main"}>
      <NavBar />
      <Header />

      {/* <ImgCanvas imageSrc={currImage} text={quote} /> */}
      <QuotedImage image={currImage} quote={quote} />
      <Carousel
        imageUrlsArr={imageUrlsArr}
        selectHandler={(imgSrc) => setCurrImage(imgSrc)}
      />
      <button className="generateButton" onClick={generateHandler}>
        Generate New Quote
        {/*    <div className="quote-container">
          <p className="quote">{quote || "no quote"}</p>
          <p className="author">{athlete || "no athlete"}</p>
        </div>
   */}
        {/*Generate Quote*/}
      </button>
      <Hackathon />

      <Footer />
    </main>
  );
}

import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { getApiOrHardcodedQuote, getImagesArr } from "./utils/fetchData";
import famousList from "./utils/famousList";
import Carousel from "./components/Carousel";
import Loader from "./components/Loader";
import QuotedImage from "./components/QuotedImage";
import About from "./components/About";
/*import Hackathon from './components/Hackathon';*/
/*Section to add if we have time*/

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState("");
  const [athlete, setAthlete] = useState("anonymous");
  const [imageUrlsArr, setImageUrlsArr] = useState([""]);
  const [currImage, setCurrImage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  /**
   * @dev if a value is passed the use it, if not just invert the current selection
   */
  const updateTheme = (value) => {
    // the value I get from local storage is a string, thus had to be this weird
    if (value === "true" || value === "false") {
      setIsDarkMode(value === "true" ? true : false);
    } else {
      // change value with button & make it permanent with localStorage
      window.localStorage.setItem("theme", !isDarkMode);
      setIsDarkMode((prev) => !prev);
    }
  };

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
    <main
      className={`main ${isLoading && "fade-out"} ${
        isDarkMode ? "dark" : "white"
      }`}
    >
      <NavBar changeMode={updateTheme} isDarkMode={isDarkMode} />

      <Header />

      {/* <ImgCanvas imageSrc={currImage} text={quote} /> */}
      <QuotedImage image={currImage} quote={quote} athlete={athlete} />

      <button className="btn generate-button" onClick={generateHandler}>
        Generate New Quote
      </button>

      <Carousel
        imageUrlsArr={imageUrlsArr}
        selectHandler={(imgSrc) => setCurrImage(imgSrc)}
      />

      <About />
      <Footer />
    </main>
  );
}

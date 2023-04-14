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
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrlsArr, setImageUrlsArr] = useState([""]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const generateHandler = async () => {
    setIsLoading(true);

    // * Add a new function in utils to randomize the name
    const randomIndex = Math.floor(Math.random() * famousList.length);
    const randomFamousObj = famousList[randomIndex];

    const inspireImgArr = await getImagesArr(randomFamousObj.sport);

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

  {/*isLoading ? (
    {/*<Loader />
  ) :*/} 

  return (
    <main className={`main ${isLoading && "fade-out"} ${isDarkMode ? "dark" : "white"}`}>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
      
      

      <Header />

      {/*<Carousel
        imageUrlsArr={imageUrlsArr}
        selectHandler={(imgSrc) => setCurrImage(imgSrc)}
      />
      <button className="btn generate-button" onClick={generateHandler}>
        Generate New Quote
      </button>*/}
      <About />
      <Footer />

    </main>
  );
}

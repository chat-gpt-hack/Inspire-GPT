import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
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

    const generateHandler = async() => {
        // * Add a new function in utils to randomize the name
        const randomIndex = Math.floor(Math.random() * famousList.length);
        const randomFamousObj = famousList[randomIndex];

    // ? Image 1st since it's faster - optimize it with Promise.All later
    const inspireImgArr = await getImagesArr(randomFamousObj.sport);
    console.log(inspireImgArr);
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
      <NavBar />
      <Header title={"Inspire Bot 3000"} />

       <Carousel
      currImage={imageUrlsArr[carrouselIndex]}
      prevImage={imageUrlsArr[carrouselIndex === 0 ? imageUrlsArr.length - 1 : carrouselIndex - 1]}
      nextImage={imageUrlsArr[carrouselIndex === imageUrlsArr.length - 1 ? 0 : carrouselIndex + 1]}
      prevHandler={previousSlide}
      nextHandler={nextSlide}
      selectHandler={(imgSrc) => setCurrImage(imgSrc)}
      quote={quote}
      athlete={athlete}
    />


      {/*<ImgCanvas imageSrc={currImage} text={quote} /> Remove this as i do not see the point, will keep this here until i have gotten the ok to totally remove it*/}
      <button className="generateButton " onClick={generateHandler}> Generate Quote </button>

      <Footer />
    </main>
  );
}
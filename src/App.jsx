import { useState } from "react";
import Header from "./components/Header";
import { getImagesArr, getQuote } from "./utils/fetchData";
import famousList from "./utils/famousList";

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
    const inspireImgArr = await getImagesArr(randomFamousObj.name);
    console.log(inspireImgArr);
    setImageUrlsArr(inspireImgArr);
    setCurrImage(inspireImgArr[0]);

    const res = await getQuote();
    // first item is the quote, second could be the author or nothing
    setQuote(res[0]);
    setAthlete(randomFamous);
  };

  return (
    <main className="main">
      <Header />
      <div className="quote-container">
        <div className="img-bg" style={{ background: `url(${currImage})` }}>
          <p className="quote">{quote || "no quote"}</p>
          <p className="author">{athlete}</p>
        </div>
      </div>
      {/* render all images in a container where they all have an onclick handler that changes the currImage */}
      <button onClick={generateHandler}> Generate Quote </button>
    </main>
  );
}

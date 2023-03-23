import { useState } from "react";
import Header from "./components/Header";
import { getImage, getQuote } from "./utils/fetchData";
import famousList from "./utils/famousList";

export default function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [imageUrl, setImageUrl] = useState("");

  const generateHandler = async () => {
    // * Add a new function in utils to randomize the name
    const res = await getQuote(famousList[0]);

    // first item is the quote, second could be the author or nothing
    const inspireImg = await getImage(famousList[0]);

    setQuote({ text: res[0], author: res[1] });
    setImageUrl(inspireImg);
  };

  return (
    <main className="main">
      <Header />
      <div className="App">
        <button onClick={generateHandler}> Generate Quote </button>
        <div className="quote-container">
          {imageUrl && <img src={imageUrl} alt="inspiartional image" />}
          <p className="quote">{quote.text || "no quote"}</p>
          <p className="author">{quote.author || "anonymous"}</p>
        </div>
      </div>
    </main>
  );
}

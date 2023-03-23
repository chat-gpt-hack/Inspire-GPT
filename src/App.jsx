import { useState } from "react";
import Header from "./components/Header";
import { getQuote } from "./utils/fetchData";
import famousList from "./utils/famousList";

export default function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [imageUrl, setImageUrl] = useState("");

  const generateHandler = async () => {
    // * Add a new function in utils to randomize the name
    const res = await getQuote(famousList[0]);
    console.log("res??", res);
    // first item is the quote, second could be the author or nothing
    setQuote({ text: res[0], author: res[1] });
  };

  return (
    <>
      <Header />
      <div className="App">
        <button onClick={generateHandler}> Generate Quote </button>{" "}
        {/* {quote && imageUrl && (
          <div className="quote-container">
            <img src={imageUrl} alt="Unsplash" />
            <p className="quote"> {quote} </p>
          </div>
        )} */}
        <p className="quote">{quote.text || "no quote"}</p>
        <p className="author">{quote.author || "anonymous"}</p>
      </div>
    </>
  );
}

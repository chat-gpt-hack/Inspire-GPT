import { useState } from "react";
import Header from "./components/Header";
import { getImage, getQuote } from "./utils/fetchData";
import famousList from "./utils/famousList";

export default function App() {
  const [quote, setQuote] = useState("");
  const [athlete, setAthlete] = useState("anonymous");
  const [imageUrl, setImageUrl] = useState("");

  const generateHandler = async () => {
    // * Add a new function in utils to randomize the name
    const randomIndex = Math.floor(Math.random() * famousList.length);
    const randomFamous = famousList[randomIndex];
    const res = await getQuote();
    setQuote(res[0]);
    setAthlete(randomFamous);

    // first item is the quote, second could be the author or nothing
    const inspireImg = await getImage(randomFamous);
    setImageUrl(inspireImg);
  };

  return (
    <main className="main">
      <Header />
      <div className="quote-container">
        <div className="img-bg" style={{ background: `url(${imageUrl})` }}>
          <p className="quote">{quote || "no quote"}</p>
          <p className="author">{athlete}</p>
        </div>
      </div>
      <button onClick={generateHandler}> Generate Quote </button>
    </main>
  );
}

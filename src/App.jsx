import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

export default function App() {
  const [quote, setQuote] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const getQuote = async () => {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_CHAT_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Give coma separated extensive list of famous athletes",
      temperature: 0.4,
      max_tokens: 64,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log(response.data.choices);
  };

  const getImage = async (str) => {
    const res = await axios(
      `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${
        import.meta.env.VITE_SPLASH_AKEY
      }`
    );
    console.log(res.data);
  };

  return (
    <div className="App">
      <button onClick={getQuote}>Click me</button>
      <button onClick={getImage}>Get image</button>
    </div>
  );
}

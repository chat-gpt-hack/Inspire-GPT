import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

let inspQuote = '';

export default function App() {
  const getQuote = async () => {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_CHAT_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Give an inspiration quote from not lebron james",
      temperature: 0.4,
      max_tokens: 64,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const quote = response.data.choices[0].text;

   // <p>{quote}</p>;
    console.log(quote);





  //  function displ
  };

  const getImage = async (str) => {
    const res = await axios(
      `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${
        import.meta.env.VITE_SPLASH_AKEY
      }`
    );
    console.log(res.data);
  };

//    const image =



  return (
    <div className="App">
      <button className='quoteButton' onClick={getQuote}>Get Quote</button>
      <button className='imgButton' onClick={getImage}>Get Image</button>
      <p onClick={getQuote.quote}>Quote goes here</p>
      <img src='https://piratediffusion1.s3.amazonaws.com/renders2/XMd4DN/00001-r-pro-iy8b36a.jpg' />

    </div>
  );
}

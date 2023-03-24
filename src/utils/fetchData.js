import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

export async function getQuote(famousName) {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_CHAT_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    // What dataset/model to use via the api, there are more options if we go for hugginface i think... maybe check it out.
    model: "text-davinci-003",
    //The promt given to chatgpt the better the promt the better the responce should be
    prompt: `Give an inspiration quote from ${famousName} please`,
    // Temp is from 0.0 - 2.0 and you can think of it as how crazy should the text be, from moderately to craycray
    temperature: 0.8,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const responseStr = response.data.choices[0].text;
  if (typeof responseStr !== "string") return "no quote";

  // separate the author from the quote
  return responseStr.split("-");
}

export async function getImagesArr(queryStr) {
  // Start of image fetching thingy why the slash g?
  // const prompt = "".replace(/[^a-z ]/gi, "");
  const unsplashUrl = `https://api.unsplash.com/search/collections?client_id=${
    import.meta.env.VITE_SPLASH_AKEY
  }&query=${queryStr}&orientation=landscape`;

  /*search method
 
   const unsplashUrl =  `https://api.unsplash.com/search/photos?page=1&query=${queryStr}&client_id=${
    import.meta.env.VITE_SPLASH_AKEY
  }`;
  */

  // fetch(unsplashUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setImageUrl(data.urls.regular);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  const res = await axios(unsplashUrl);

  return (
    res.data.results.map((res) => res.preview_photos[0].urls.regular) || ""
  );
}

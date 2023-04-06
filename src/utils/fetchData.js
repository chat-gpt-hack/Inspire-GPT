import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import famousList from "./famousList";

// * random int between & inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// * chat api
async function getAPIQuote(famousName) {
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

// * get hardcoded quote if API fails
export async function getApiOrHardcodedQuote(famousName) {
  let quote = "";

  try {
    const res = await getAPIQuote(famousName);
    // first item is the quote, the second could be the author (if we are missing famousName...)
    quote = res[0];
  } catch (error) {
    const quoteObject = famousList.find((e) => e.name === famousName);
    const rndInt = getRandomInt(0, quoteObject.quotes.length - 1);
    quote = quoteObject.quotes[rndInt];
    console.log(quote, quoteObject);
    console.error("failed api key", error.mesage);
  }
  console.log(quote);
  return quote;
}

// * usplash img
export async function getImagesArr(queryStr) {
  const unsplashUrl = `https://api.unsplash.com/search/collections?client_id=${
    import.meta.env.VITE_SPLASH_AKEY
  }&query=${queryStr}&orientation=landscape`;

  const res = await axios(unsplashUrl);

  return (
    res.data.results.map((res) => res.preview_photos[0].urls.regular) || ""
  );
}

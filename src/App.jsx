import { useState } from "react";
import Header from "./components/Header";
import { getImagesArr, getQuote } from "./utils/fetchData";
import famousList from "./utils/famousList";

export default function App() {
    const [quote, setQuote] = useState("");
    const [athlete, setAthlete] = useState("anonymous");
    const [imageUrlsArr, setImageUrlsArr] = useState([""]);
    const [currImage, setCurrImage] = useState("");

    const generateHandler = async() => {
        // * Add a new function in utils to randomize the name
        const randomIndex = Math.floor(Math.random() * famousList.length);
        const randomFamousObj = famousList[randomIndex];

        <<
        <<
        << << < Temporary merge branch 1
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

    const getImage = async(str) => {
        const res = await axios(
            `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${
        import.meta.env.VITE_SPLASH_AKEY
      }`
        );
        console.log(res.data);
    };

    return ( <
        div className = "App" >
        <
        button onClick = { getQuote } > Click me < /button> <
        button onClick = { getImage } > Get image < /button> < /
        div >
    );
} ===
===
===
const response = await openai.createCompletion({
    model: "text-davinci-001",
    prompt: "Give an inspiration quote from a famous person please",
    temperature: 0.8,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
});
// TODO Generate the display of text coming back from the api call
console.log(response.data.choices[0].text);
};

return ( <
    div className = "App" >
    <
    button onClick = { getQuote } > Click me < /button> < /
    div >
);
} >>>
>>>
>>> Temporary merge branch 2
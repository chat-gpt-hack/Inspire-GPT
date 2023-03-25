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

<<<<<<< HEAD
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
=======
        // ? Image 1st since it's faster - optimize it with Promise.All later
        const inspireImgArr = await getImagesArr(randomFamousObj.name);
        console.log(inspireImgArr);
        setImageUrlsArr(inspireImgArr);
        setCurrImage(inspireImgArr[0]);
>>>>>>> jd-branch

        const res = await getQuote();
        // first item is the quote, second could be the author or nothing
        setQuote(res[0]);
        setAthlete(randomFamous);
    };

    return ( <
        main className = "main" >
        <
<<<<<<< HEAD
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
=======
        Header / >
        <
        div className = "quote-container" >
        <
        div className = "img-bg"
        style = {
            { background: `url(${currImage})` } } >
        <
        p className = "quote" > { quote || "no quote" } < /p> <
        p className = "author" > { athlete } < /p> <
        /div> <
        /div> { /* render all images in a container where they all have an onclick handler that changes the currImage */ } <
        button onClick = { generateHandler } > Generate Quote < /button> <
        /main>
    );
}
>>>>>>> jd-branch

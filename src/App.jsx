import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";


export default function App() {
    const [quote, setQuote] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const getQuote = async() => {
        const configuration = new Configuration({
            apiKey: import.meta.env.VITE_CHAT_KEY,
        });

        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
            // What dataset/model to use via the api, there are more options if we go for hugginface i think... maybe check it out.
            model: "text-davinci-001",
            //The promt given to chatgpt the better the promt the better the responce should be
            prompt: "Give an inspiration quote from a famous person please",
            // Temp is from 0.0 - 2.0 and you can think of it as how crazy should the text be, from moderately to craycray
            temperature: 0.8,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        // Start of image fetching thingy why the slash g? is REGEX means probalby global
        const prompt = response.data.choices[0].text.replace(/[^a-zA-Z ]/g, "");
        const unsplashUrl = `https://api.unsplash.com/photos/random?client_id=${
                                import.meta.env.VITE_UN_ACC
                            }&query=${prompt}`;

        fetch(unsplashUrl)
            .then(response => response.json())
            .then(data => {
                setImageUrl(data.urls.regular);
            })
            .catch(error => {
                console.error(error);
            });

        setQuote(response.data.choices[0].text);
    };

    return ( <
        div className = "App" >
        <button onClick = { getQuote } > Generate Quote < /button> {
            quote && imageUrl && ( 
                <div className = "quote-container" >
                <img src = { imageUrl } alt = "Unsplash" / >
                <p className = "quote" > { quote } </p> 
                </div>
            )
        } <
        /div>
    );
}
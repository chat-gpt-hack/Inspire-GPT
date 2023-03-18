import { Configuration, OpenAIApi } from "openai";

export default function App() {
  const getQuote = async () => {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_CHAT_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-001",
      prompt: "Inspire me with a quote from not Lebron James or Steve Jobs and then always add emoji after the quote.",
      temperature: .8,
      max_tokens: 64,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const quote = response.data.choices[0].text;

    console.log(quote);

  };

  return (
    <div className="App">
      <button onClick={getQuote}>Inspire me</button>
      

      
    </div>
  );
}
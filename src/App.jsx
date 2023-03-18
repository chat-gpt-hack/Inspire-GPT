import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

export default function App() {
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

  return (
    <div className="App">
      <button onClick={getQuote}>Click me</button>
    </div>
  );
}

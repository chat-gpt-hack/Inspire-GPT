import { useState } from "react";

function App() {
  const [input, setInput] = useState(second);

  return (
    <div className="App">
      <h1>App title</h1>
      <div className="input-section">
        <label>
          Enter your phrase
          <input type="text" />
        </label>
      </div>
    </div>
  );
}

export default App;

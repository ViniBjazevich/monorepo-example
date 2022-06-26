import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then(({ data }) => setMessage(data))
      .catch((e) => console.log(e));
  }, []);

  return <div className="App">
    <h1>Monorepo Example</h1>
    <div>{message}</div>
  </div>;
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then(({ data }) => {
        setTimeout(() => {
          setMessage(data);
        }, 2000);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <h1>Monorepo Example</h1>
      <div>{message ?? "No message found"}</div>
    </div>
  );
}

export default App;

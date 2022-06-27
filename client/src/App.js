import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import useLocalStorage from "./CustomHooks/useLocaleStorage";

function App() {
  const [message, setMessage] = useState(null);
  const [name, setName] = useLocalStorage("name", "Vini Bjazevich");

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then(({ data }) => setMessage(data))
      .catch((e) => console.log(e));
  }, []);


  return (
    <div className="App">
      <h1>Monorepo Example</h1>
      <div>{message ?? "No message found"}</div>
      <h2>Local Storage Persisting Data Example: </h2>
      <div>
        <span>Name: </span>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
}

export default App;

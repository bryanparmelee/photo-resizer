import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <p>{message.length > 0 ? message : "somethnig went wrong"}</p>
    </>
  );
}

export default App;

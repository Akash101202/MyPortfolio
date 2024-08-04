import HomePage from "./components/HomePage";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed
  }, []);
  return <>{loading ? <Loader /> : <HomePage />}</>;
}

export default App;

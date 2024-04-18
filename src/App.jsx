import { useEffect } from "react";
import axios from "axios";

export default function App() {
  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "<https://hn.algolia.com/api/v1/search?query=react>"
      );
      console.log(response);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
}
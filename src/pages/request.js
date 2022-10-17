import { useEffect } from "react";

function RequestPage() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return <h1>Request Page</h1>;
}

export default RequestPage;

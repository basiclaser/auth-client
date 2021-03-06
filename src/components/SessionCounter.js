import { useState, useEffect } from "react";
const { REACT_APP_API_URL = "http://localhost:4000" } = process.env;

const SessionCounter = () => {
  const [count, setCount] = useState("");
  useEffect(() => {
    fetch(REACT_APP_API_URL, {
      credentials: "include",
      "Access-Control-Allow-Origin": "http://localhost:4000",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCount(res.requestCount);
      });
  }, []);
  return <h1>{count}</h1>;
};
export default SessionCounter;

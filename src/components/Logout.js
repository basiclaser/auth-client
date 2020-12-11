import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
const { REACT_APP_API_URL = "http://localhost:4000" } = process.env;

const Logout = () => {
  let history = useHistory();
  useEffect(() => {
    fetch(REACT_APP_API_URL + "/logout", {
      credentials: "include",
      "Access-Control-Allow-Origin": "http://localhost:4000",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        history.push(res.redirectUrl);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>logging out..</div>;
};

export default Logout;

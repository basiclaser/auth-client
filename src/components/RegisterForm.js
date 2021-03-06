import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
const { REACT_APP_API_URL = "http://localhost:4000" } = process.env;

const RegisterForm = () => {
  let history = useHistory();

  const [formState, setFormState] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(REACT_APP_API_URL + "/register", {
      method: "POST",
      body: JSON.stringify(formState),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      "Access-Control-Allow-Origin": "http://localhost:4000",
    })
      .then((res) => res.json())
      .then((res) => history.push(res.redirectUrl))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="name">name</label>
          <input
            onChange={handleChange}
            value={formState.name}
            type="text"
            name="name"
          ></input>
        </div>
        <div>
          <label for="email">email</label>
          <input
            onChange={handleChange}
            value={formState.email}
            type="email"
            name="email"
          ></input>
        </div>
        <div>
          <label for="password">password</label>
          <input
            onChange={handleChange}
            value={formState.password}
            type="password"
            name="password"
          ></input>
        </div>
        <button type="submit">register</button>
      </form>
      <Link to="/login">login</Link>
    </div>
  );
};

export default RegisterForm;

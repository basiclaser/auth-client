import { Switch, Route, Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import SessionCounter from "./components/SessionCounter";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <span>
          <Link to="/">homepage</Link>{" "}
        </span>
        <span>
          <Link to="register">register</Link>{" "}
        </span>
        <span>
          <Link to="login">login</Link>{" "}
        </span>
        <span>
          <Link to="profile">profile</Link>{" "}
        </span>
        <span>
          <Link to="logout">logout</Link>{" "}
        </span>
      </nav>
      <Switch>
        <Route exact path="/">
          <SessionCounter />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import SessionCounter from "./components/SessionCounter";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SessionCounter />
        </Route>
        <Route exact path="/register">
          <RegisterForm />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

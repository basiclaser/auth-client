import { Switch, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import SessionCounter from "./components/SessionCounter";
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
      </Switch>
    </div>
  );
}

export default App;

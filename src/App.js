import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Homepage from "../src/Components/HomePage/Homepage";
import Register from "./Components/Register/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App" data-aos="fade-in">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Homepage />
          </Route>
          <Route exact path="/Register">
            <Navbar />
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

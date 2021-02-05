import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Homepage from "../src/Components/HomePage/Homepage";
import Register from "./Components/Register/Register";
import Job from "./Components/Job/Job";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
            <Route exact path="/">
              <Navbar />
              <Homepage />
            </Route>
            <Route exact path="/Register">
              <Navbar />
              <Register />
            </Route>
            <Route exact path="/Job">
              <Navbar />
              <Job />
            </Route>
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Homepage from "../src/Components/HomePage/Homepage";
import Register from "./Components/Register/Register";
import Login from "./Components/Register/Login";
import Job from "./Components/Job /Job";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";

toast.configure();

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Homepage />
            <Footer />
          </Route>
          <Route exact path="/Register">
            <div className="reg">
            <Navbar />
            <Register />
            <div className="footer_reg">
              <Footer />
            </div>
            </div>
          </Route>
          <Route exact path="/Login">
            <Navbar />
            <Login />
            <div className="footer_reg">
              <Footer />
            </div>
          </Route>
          <Route
            exact
            path="/Job"
            render={() => {
              if (localStorage.getItem("user")) {
                return (
                  <>
                    <Navbar />
                    <Job />
                    <div className="footer_reg">
                      <Footer />
                    </div>
                  </>
                );
              } else {
                toast.error(`Please Login First`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: false,
                });
                return <Redirect to="/Login" />;
              }
            }}
          />
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

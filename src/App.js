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
import AdminNavbar from "./Components/Admin Navbar/AdminNavbar";
import Admin from "./Components/Admin/Admin";
import RegisterdStudents from "./Components/RegisterdStudents/RegisterdStudents";
import Verify from "./Components/Verify/Verify";

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
                toast(`Please Login First`, {
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
          <Route exact path="/verify">
            <Navbar />
            <Verify/>
          </Route>
          <Route exact path="/Admin/tyFAG8sBHkFc2pyZE7jJ47MSuas8496u4389hds98ds9bg">
            <Admin />
          </Route>
          <Route exact path="/Admin/tyFAG8sBHkFc2pyZE7jJ47MSuas8496u4389hds98ds9bg/registered">
            <AdminNavbar />
            <RegisterdStudents />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

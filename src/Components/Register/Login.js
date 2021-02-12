import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "../../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Login() {
  const history = useHistory();
  const [data, setData] = useState();
  const handleChange = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    Axios.post("/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user.name);
        toast(`Logged in Successfully`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
        history.push("/");
      })
      .catch((err) => {
        toast(`User Not Found`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      });
  };
  return (
    <div className="main_div_auth">
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img
              src="https://i.ibb.co/MgtfHQ8/sticker-png-cartoon-rocket-logo-blackandwhite-removebg-preview.png"
              alt=""
            />
            <h3>Explore Yourself !</h3>
            <p>After Graduation</p>
            <Link to="/Register">
              <input
                onChange={handleChange}
                type="submit"
                value="Register"
                className="mt-5"
              />{" "}
            </Link>
          </div>
          <div class="col-md-9 register-right">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 class="register-heading">
                  <h2> Login </h2> After Graduation{" "}
                </h3>
                <div class="row register-form">
                  <div class="col-md-8 ml-5">
                    <form onSubmit={handleSubmit}>
                      <div class="form-group  ">
                        <div class="form-group ">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Your Email *"
                            onChange={handleChange}
                            name="email"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control"
                            placeholder="password *"
                            onChange={handleChange}
                            name="password"
                            required
                          />
                        </div>
                      </div>
                      <input
                        type="submit"
                        class="btnRegister mr-5"
                        value="Login"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

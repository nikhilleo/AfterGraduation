import React, { useState } from "react";
import "./Register.css";
import Axios from "../../axios";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Register() {
  const history = useHistory();

  const [Data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Data.gender) {
      alert("Select Gender");
    } else {
      Axios.post("/signup", Data)
        .then((res) => {
          if (res.data.message == "User Created") {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.user.name);
            toast(`Registered Successfully`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
            });
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err.response)
          toast(`${err.response.data}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        });
    }
  };

  const handleChange = (e) => {
    console.log(e.target);
    setData((prevstate) => {
      return {
        ...prevstate,
        [e.target.name]: e.target.value,
      };
    });
    console.log(Data);
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
            <Link to="/Login">
              <input type="submit" value="login" className="mt-5" />{" "}
            </Link>
          </div>
          <div class="col-md-9 register-right">
            <form onSubmit={handleSubmit}>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 class="register-heading">
                    <h2>Apply </h2> After Graduation{" "}
                  </h3>
                  <div class="row register-form">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          onChange={handleChange}
                          type="text"
                          class="form-control"
                          name="name"
                          required
                          placeholder="Full Name *"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          onChange={handleChange}
                          type="text"
                          minlength="10"
                          maxlength="10"
                          class="form-control"
                          placeholder="Your Mobile Number *"
                          name="mobile"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          onChange={handleChange}
                          type="text"
                          minlength="10"
                          maxlength="10"
                          class="form-control"
                          name="altmobile"
                          placeholder=" Alternate Mobile Number"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          onChange={handleChange}
                          type="email"
                          class="form-control"
                          placeholder="Your Email *"
                          name="email"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          onChange={handleChange}
                          type="password"
                          class="form-control"
                          placeholder="password *"
                          name="password"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <select
                          name="gender"
                          onChange={handleChange}
                          class="form-control"
                        >
                          <option class="hidden" selected disabled>
                            Gender *{" "}
                          </option>
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6 ">
                      <div class="form-group">
                        <div class="form-group">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="qualification"
                            required
                            class="form-control"
                            placeholder="Qualification*"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="specialization"
                            class="form-control"
                            placeholder="Specialization *"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          type="submit"
                          class="btnRegister"
                          value="Register"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

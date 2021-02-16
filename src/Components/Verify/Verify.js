import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from "../../axios";
import "./Verify.css"

function Verify() {

    const history = useHistory();

    const [OTP, setOTP] = useState({});

    const [toVerifyData, setVerifyData] = useState({});

    const [children, setchildren] = useState([]);

    const [sendOTP, setsendOTP] = useState("")

    const [cnt, setcnt] = useState(0);

    const [val, setVal] = useState();

    useEffect(() => {
      var cntInp = document.getElementsByClassName("otp");
      // console.log(cntInp[0].children);
      setchildren(cntInp[0].children);
    }, [])

    const handleSubmit = (e)=>{
      e.preventDefault();
      const user = localStorage.getItem("userData");
      const otp = localStorage.getItem("otp");
      toVerifyData.user = user
      toVerifyData.otp_id = otp;
      toVerifyData.otp = sendOTP;
      Axios.post("/verify",toVerifyData)
      .then((res)=>{

        localStorage.clear();
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user.name);
        history.push("/");
        toast(`Registered !`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      })
      .catch((err)=>{
        // window.location.reload();
        setTimeout(toast(`${err.response.data}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        }),10000) 
        setcnt(0);
        setsendOTP("")
        setOTP({});
        setVal("");
        var cntInp = document.getElementsByClassName("otp");
        setchildren(cntInp[0].children);
      })
      // // console.log(cntInp[0].children);
      // 8666871848
      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("user", res.data.user.name);
    }

    const handleChange = (e)=>{
      // this.setVal(e.target.value);
      setOTP((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }));
      e.target.value = e.target.value;
      setcnt(cnt+1)
      // console.log(cnt);
      if(cnt<5){
        // console.log(children[cnt].children[0].attributes);
        // console.log(children[cnt].children[0].attributes.NamedNodeMap)
        // console.log(children[cnt])
        children[cnt+1].children[0].focus();
        // console.log(cnt);
      }
      else
      {
        // console.log(cnt);
        // console.log("else");
      }
      setsendOTP(sendOTP + e.target.value)
      // console.log(sendOTP);
    }

    return (
        <div className="main_div_auth">
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img
              src="https://i.ibb.co/MgtfHQ8/sticker-png-cartoon-rocket-logo-blackandwhite-removebg-preview.png"
              alt=""
            />
            {/* <h3>Explore Yourself !</h3>
            <p>After Graduation</p> */}
            <h3>Verift OTP Sent To Your Email</h3>
            <br/>
            <h6><em>Check Spam Folder To Get Email</em></h6>
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
                  {/* <h2> Login </h2> After Graduation{" "} */}
                  Enter OTP
                </h3>
                <div class="row register-form">
                  <div class="col-md-8 ml-5">
                    <form >
                      <div class="form-group  ">
                      <div className="otp">
                        <div class="form-group ">
                          <input
                            value={val}
                            type="text"
                            class="form-control"
                            placeholder="*"
                            maxlength="1"
                            name="otp-1"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="form-group ">
                          <input
                            value={val}
                            type="text"
                            class="form-control"
                            placeholder="*"
                            name="otp-2"
                            maxlength="1"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="form-group ">
                          <input
                            value={val}
                            type="text"
                            class="form-control"
                            placeholder="*"
                            name="otp-3"
                            maxlength="1"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="form-group ">
                          <input
                            value={val}
                            type="text"
                            class="form-control"
                            placeholder="*"
                            name="otp-4"
                            maxlength="1"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="form-group ">
                          <input
                            value={val}
                            type="text"
                            class="form-control"
                            placeholder="*"
                            name="otp-5"
                            maxlength="1"
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div class="form-group ">
                          <input
                            value={val}
                            type="text"
                            class="form-control"
                            placeholder="*"
                            name="otp-6"
                            maxlength="1"
                            onChange={handleChange}
                            required
                          />
                        </div>                      
                      </div>
                      </div>
                      <input
                        onClick={handleSubmit}
                        type="submit"
                        class="btnRegister mr-5"
                        value="Verify OTP"
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
    )
}

export default Verify

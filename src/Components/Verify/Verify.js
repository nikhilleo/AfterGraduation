import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from "../../axios";
import OtpInput from 'react-otp-input';
import "./Verify.css"

function Verify() {

  const history = useHistory();
  
  const [toVerifyData, setVerifyData] = useState({});
  
  const [otp, setotp] = useState("")
  
  const handleChange = (e)=>{
    // console.log(e);
    setotp(e)
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(otp)
      const user = localStorage.getItem("userData");
      const otp_id = localStorage.getItem("otp");
      toVerifyData.user = user
      toVerifyData.otp_id = otp_id;
      toVerifyData.otp = otp;
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
        console.log(err.response.data);
        toast(`${err.response.data}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        })
        setotp("");
      })
  }

  // return (
  //   <div>
  //     <OtpInput
  //     value={otp}
  //     onChange={handleChange}
  //     numInputs={6}
  //     separator={<span>-</span>}
  //     />
  //   </div>
  // )
  
    // const history = useHistory();

    // const [OTP, setOTP] = useState({});

    // const [toVerifyData, setVerifyData] = useState({});

    // const [children, setchildren] = useState([]);

    // const [sendOTP, setsendOTP] = useState("")

    // const [cnt, setcnt] = useState(0);

    // const [val, setVal] = useState();

    // const [valid, setValid] = useState(false);

    // const [check, setCheck] = useState();

    // const show = ()=>{
    //   setCheck(false);
    //   setValid(false)
    // }

    // useEffect(()=>{
    //   if(valid)
    //   {
    //     alert("Wrong OTP");
    //     window.location.reload();
    //     show();
    //   }
    // },[valid])


    // useEffect(() => {
    //   var cntInp = document.getElementsByClassName("otp");
    //   // console.log(cntInp[0].children);
    //   setchildren(cntInp[0].children);
    // }, [])

    // const handleSubmit = (e)=>{
    //   e.preventDefault();
    //   const user = localStorage.getItem("userData");
    //   const otp = localStorage.getItem("otp");
    //   toVerifyData.user = user
    //   toVerifyData.otp_id = otp;
    //   toVerifyData.otp = sendOTP;
    //   Axios.post("/verify",toVerifyData)
    //   .then((res)=>{

    //     localStorage.clear();
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("user", res.data.user.name);
    //     history.push("/");
    //     toast(`Registered !`, {
    //       position: toast.POSITION.TOP_CENTER,
    //       autoClose: 3000,
    //     });
    //   })
    //   .catch((err)=>{
    //     // window.location.reload();

    //     setcnt(0);
    //     setsendOTP("")
    //     setOTP({});
    //     setValid(true)
    //     var cntInp = document.getElementsByClassName("otp");
    //     setchildren(cntInp[0].children);
    //   })
    //   // // console.log(cntInp[0].children);
    //   // 8666871848
    //   // localStorage.setItem("token", res.data.token);
    //   // localStorage.setItem("user", res.data.user.name);
    // }

    // const handleChange = (e)=>{
    //   // this.setVal(e.target.value);
    //   setOTP((prevState)=>({
    //     ...prevState,
    //     [e.target.name]:e.target.value
    //   }));
    //   e.target.value = e.target.value;
    //   setcnt(cnt+1)
    //   // console.log(cnt);
    //   if(cnt<5){
    //     // console.log(children[cnt].children[0].attributes);
    //     // console.log(children[cnt].children[0].attributes.NamedNodeMap)
    //     // console.log(children[cnt])
    //     children[cnt+1].children[0].focus();
    //     children[cnt].children[0].value = e.target.value
    //     // console.log(cnt);
    //   }
    //   else
    //   {
    //     // children[cnt].children[0].value = e.target.value
    //     // console.log(cnt);
    //     // console.log("else");
    //   }
    //   setsendOTP(sendOTP + e.target.value)
    //   // console.log(sendOTP);
    // }

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
                        <OtpInput
                          isInputNum="true"
                          shouldAutoFocus="true"
                          className="form"
                          value={otp}
                          onChange={handleChange}
                          numInputs={6}
                          separator={<span>-</span>}
                        />
                        </div>
                        {/* <div class="form-group ">
                          <input
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
                            type="text"
                            class="form-control"
                            placeholder="*"
                            name="otp-6"
                            maxlength="1"
                            onChange={handleChange}
                            required
                          />
                        </div>                       */}
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

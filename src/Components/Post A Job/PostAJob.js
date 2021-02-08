import React, { useState } from "react";
import "./PostAJob.css";
import { toast } from "react-toastify";
import Axios from "../../axios";
function PostAJob() {
  const [JobData, setJobData] = useState({});

  const [Value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("/jobs/addJob", JobData)
      .then((res) => {
        toast.info(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
        setValue("");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      });
    // console.log(JobData)
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setJobData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(JobData);
  };

  return (
    <div className="add_job">
      <div class="container contact-form">
        <div class="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <h2 style={{ color: "black" }}>Add Job Information</h2>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="jobTitle"
                  class="form-control"
                  placeholder="Job Title"
                  value={Value}
                />
              </div>
              <div class="form-group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="jobLoc"
                  class="form-control"
                  placeholder="Job Location"
                  value={Value}
                />
              </div>
              <div class="form-group">
                <input
                  onChange={handleChange}
                  type="text"
                  name="jobExp"
                  class="form-control"
                  placeholder="Experience Required"
                  value={Value}
                />
              </div>
              <div class="form-group">
                <input type="submit" class="btnContact" value="Send Message" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  onChange={handleChange}
                  name="jobDesc"
                  className="job_desc_inp"
                  class="form-control"
                  placeholder="Job Description*"
                  value={Value}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostAJob;

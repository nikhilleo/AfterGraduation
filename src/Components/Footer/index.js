import React from "react";
import "./style.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Index() {
  return (
    <div style={{ marginTop: "188vh" }} className="footerMain">
      <footer class="footer">
        <div class="footer-left col-md-6 col-sm-6">
          <h1 class="about">
            <h1 className="p">Explore Yourself !</h1>
            <br />
            <p className="pp">After Graduation</p>
            <br />
            <p className="ppp" style={{ fontSize: "1rem" }}>
              "You haven't mastered a tool until you <br />
              understand when it should not be used." – Kelsey Hightower
            </p>
          </h1>
        </div>
        <div class="footer-center col-md-4 col-sm-6">
          <div>
            <i class="fa fa-map-marker"></i>
            <p> Ahmednagar</p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>+ 91 7020694917 </p>
          </div>
          <div class="ml-3" style={{ display: "flex", alignItems: "center" }}>
            <WhatsAppIcon
              style={{
                color: "white",
                background: "#33383b",
                borderRadius: "50%",
                fontSize: "2.5rem",
              }}
            />
            <span class="ml-2" style={{ color: "white" }}>
              +91 902887623
            </span>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="#"> chetankabra14th@gmail.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right   col-md-6 col-sm-6">
          <div className="logo "></div>
        </div>
      </footer>
    </div>
  );
}

export default Index;

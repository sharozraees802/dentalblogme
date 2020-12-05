import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail, MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";

const Footer = () => {
  const [message, setMessage] = useState("");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "testemail",
        "template_flkh36l",
        e.target,
        "user_eyDNBhP1Z4UkiEOVAGGoc"
      )
      .then(
        (result) => {
          setMessage("Thank You...");
          console.log(result.text);
        },
        (error) => {
          setMessage("Something Wrong...");
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div
      className="footer-container"
      style={{
        height: "400px",
        width: "100%",
        color: "#afb4bf",
        backgroundColor: "#001f24",
      }}
    >
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-3">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ margin: "20px" }}>
               <a href="/"> <img
                  style={{ width: "150px", paddingBottom: "20px" }}
                  src="/logonb.png"
                />
                </a>
                <div style={{ display: "flex" }} className="mb-3">
                  <div>
                    <AiFillPhone />
                  </div>
                  <div style={{ fontSize: "15px", marginLeft: "10px" }}>
                    +55 11 985526927
                  </div>
                </div>
                <div style={{ display: "flex" }} className="mb-3">
                  <div>
                    <MdEmail />
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "15px" }}>
                    contato@dental04.com
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <MdLocationOn />
                  </div>
                  <div style={{ marginLeft: "10px", fontSize: "15px" }}>
                    Av Yojiro Takaoka, 438, 7th floor - Alphaville - SP
                    <br /> 06541-038, Brazil
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "12px", paddingTop: "40px" }}>
                    &copy; DENTAL04 All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="row mt-5">
              <div className="col-4">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>FEATURES</p>
                <div style={{ fontSize: "14px", color: "grey" }}>
                  <p>
                    <a href="/blog">Blog</a>
                  </p>
                  <p>
                    <a href="/classified">Classifieds</a>
                  </p>
                </div>
              </div>
              <div className="col-4">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>COMPANY</p>
                <div style={{ fontSize: "14px", color: "grey" }}>
                  <p>
                    <a href="/about">About</a>
                  </p>
                  <p>
                    <a href="/about">Goal</a>
                  </p>
                  <p>
                    <a href="/about">Policy</a>
                  </p>
                </div>
              </div>
              <div className="col-4">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  GET STARTED
                </p>
                <div style={{ fontSize: "14px", color: "grey" }}>
                  <p>
                    <a href="/contact" style={{ textDecoration: "none"}}>Contact</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 mt-5">
            <p>{message}</p>
            <form onSubmit={sendEmail}>
              <label>Weekly Newslatter</label>
              <br />
              <input
                type="text"
                name="to_name"
                style={{
                  width: "80%",
                  backgroundColor: "#afb4bf",
                  padding: "5px",
                  border: "0px",
                  margin: "10px 0px",
                }}
                placeholder="Your Name"
              />
              <input
                type="text"
                name="from_name"
                style={{
                  width: "80%",
                  backgroundColor: "#afb4bf",
                  padding: "5px",
                  border: "0px",
                  margin: "10px 0px",
                }}
                placeholder="Your Email"
              />
              <br />
              <input
                type="submit"
                style={{
                  width: "80%",
                  backgroundColor: "blue",
                  fontWeight: "bold",
                  color: "white",
                  padding: "5px",
                  border: "0px",
                  margin: "10px 0px",
                }}
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

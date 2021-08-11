import React, { useState } from "react";
//pvxgbeohdfdnaiey
import Alert from "../Alert/Alert";
import "./Contact.css";
import emailJS from "emailjs-com";
import { init } from "emailjs-com";
init("user_NI2pCwRnGiHD3Mr6XuZ7J");
const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    alert: "",
  });
  const [buttonText, setButtonText] = useState("Send Message");
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setUserDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const isEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      userDetails.name.length === 0 ||
      userDetails.subject.length === 0 ||
      userDetails.email.length === 0
    ) {
      setUserDetails((prevState) => ({
        ...prevState,
        alert: "Please fill in all fields",
      }));

      setTimeout(() => {
        setUserDetails((prevState) => ({
          ...prevState,
          alert: "",
        }));
      }, 2000);
    } else if (isEmail(userDetails.email) === false) {
      setUserDetails((prevState) => ({
        ...prevState,
        alert: "Email is invalid",
      }));

      setTimeout(() => {
        setUserDetails((prevState) => ({
          ...prevState,
          alert: "",
        }));
      }, 2000);
    } else {
      setButtonText("Sending...");
      try {
        const result = await emailJS.sendForm(
          "service_hnmr6gt",
          "template_y4id6mm",
          e.target,
          process.env.REACT_APP_EMAILJS_USER_ID
        );
        setButtonText("Sent Successfully");
        setUserDetails((prevState) => ({
          ...prevState,
          name: "",
          email: "",
          subject: "",
          message: "",
          alert: "",
        }));

        setTimeout(() => {
          setButtonText("Send Message");
        }, 3000);
      } catch (error) {
        console.log(error);

        setButtonText(error);
      }
    }
  };
  return (
    <div className="contact" id="contact">
      {userDetails.alert.length === 0 ? null : (
        <Alert alert={userDetails.alert} />
      )}

      <div className="contact-heading">Contact</div>
      <div className="contact-form">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="field">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-field"
              value={userDetails.name}
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
          </div>
          <div className="field">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-field"
              value={userDetails.email}
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="form-field"
              value={userDetails.subject}
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>
          </div>
          <div className="field">
            <textarea
              id="message"
              name="message"
              className="message"
              placeholder="Message"
              className="text-area form-field"
              value={userDetails.message}
              onChange={(e) => {
                handleChange(e);
              }}
            ></textarea>
          </div>
          <div className="field">
            <input
              type="submit"
              className="mail-button link"
              value={buttonText}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

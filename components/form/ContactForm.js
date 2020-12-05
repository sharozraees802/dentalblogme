import { useState } from "react";
import emailjs from "emailjs-com";
const ContactForm = () => {
  const [message, setMessage] = useState("");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "testemail",
        "template_3u3ejq1",
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
    <form className="pb-5" onSubmit={sendEmail}>
        <p>{message}</p>
      <div className="form-group">
        <label className="lead">Message</label>
        <textarea
          type="text"
          name="message"
          className="form-control"
          required
          rows="10"
        ></textarea>
      </div>

      <div className="form-group">
        <label className="name">Name</label>
        <input type="text" name="from_name" className="form-control" />
      </div>

      <div className="form-group">
        <label className="email">Email</label>
        <input type="email" name="email" className="form-control" required />
      </div>

      <div>
        <input type="submit" value="Send" style={{width:"70px", height: "40px", backgroundColor:"#001f24", color:"white"}} />
      </div>
    </form>
  );
};

export default ContactForm;

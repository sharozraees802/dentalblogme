import axios from "axios";

export const sendMail = async (name,email,link) => {
  try {
    let request = await axios
      .post("/api/email", {// set your endpoint
        name: name,//name from textbox
        email:email,//email of the sender
        //subject: subject,//send email subject
        msg: link,//message of the link
      })
      .then((res) => {
        return res;
      });
    return request.status === 200 ? true : false;;
  } catch (err) {
    console.error(err);
  }
};
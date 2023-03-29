import { Fragment } from "react";
import firebase from "../../config/firebase";

import logo from "../../assests/logo.png";
import Button from "../UI/Button";
import image from "../../assests/image001.png";
import classes from "./MainTable.module.css";

const MainTable = () => {
  async function sendAuthenticatedEmail() {
    try {
      // Use Firebase's authentication APIs to sign in the user.
      const email = "12jdfj@gmail.com";
      const password = "5777567";
      await firebase.auth().signInWithEmailAndPassword(email, password);

      const sendEmail = firebase.functions().httpsCallable("sendEmail");
      const result = await sendEmail({
        email: "kabdi9312@gmail.com",
        subject: "Email from a Firebase function",
        html: `<p>Hello, here is some <a href="https://example.com">clickable link</a> and a logo picture <img src=${image}></p>`,
      });

      console.log("Email sent successfully:", result);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logo}></img>
        <h1>Resource Booking</h1>
      </header>
      <div className={classes["booking-table-btns"]}>
        <Button>Log out</Button>
        <Button onClick={sendAuthenticatedEmail}>Reset Password</Button>
        <Button>Search Rooms</Button>
        <Button>My bookings</Button>
        <Button>All Bookings</Button>
      </div>
    </Fragment>
  );
};

export default MainTable;

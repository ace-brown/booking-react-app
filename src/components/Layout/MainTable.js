import { Fragment } from "react";

import CartButton from "./CartButton";
import logo from "../../assests/logo.png";
import classes from "./MainTable.module.css";

const MainTable = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logo}></img>
        <h1>Resource Booking</h1>
      </header>
      <div className={classes["booking-table-btns"]}>
        <CartButton className={classes["booking-table-btns--modified"]}>
          Log out
        </CartButton>
        <CartButton>Reset Password</CartButton>
        <CartButton>Search Rooms</CartButton>
        <CartButton>My bookings</CartButton>
        <CartButton>All Bookings</CartButton>
      </div>
    </Fragment>
  );
};

export default MainTable;

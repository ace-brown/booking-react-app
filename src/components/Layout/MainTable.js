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
        <CartButton className={classes["booking-table-btns--modified"]}>
          Reset Password
        </CartButton>
        <CartButton className={classes["booking-table-btns--modified"]}>
          Search Rooms
        </CartButton>
        <CartButton className={classes["booking-table-btns--modified"]}>
          My bookings
        </CartButton>
        <CartButton className={classes["booking-table-btns--modified"]}>
          All Bookings
        </CartButton>
      </div>
    </Fragment>
  );
};

export default MainTable;

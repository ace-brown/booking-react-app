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
        <CartButton className={classes["booking-table-btns--modified"]} />
        <CartButton className={classes["booking-table-btns--modified"]} />
        <CartButton className={classes["booking-table-btns--modified"]} />
        <CartButton className={classes["booking-table-btns--modified"]} />
        <CartButton className={classes["booking-table-btns--modified"]} />
      </div>
    </Fragment>
  );
};

export default MainTable;

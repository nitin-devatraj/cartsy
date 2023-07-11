import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import logo from "../../assets/icon.png";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="#" height="70" />
        <h1>Cartsy</h1>
      </div>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

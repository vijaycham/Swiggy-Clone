import { LOGO_URL } from "../utils/constants";
import { useEffect, useState ,} from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setbtnName] = useState(["Login"]);
  useEffect(()=> {
  }, [btnName]); 
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About us </Link>
          </li>
          <li>
            <Link to="/contact"> contact us </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

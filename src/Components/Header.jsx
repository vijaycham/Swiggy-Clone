import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState(["Login"]);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between bg-lime-50 shadow-md mb-5 border-lime-100 border-2 items-center">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className=" flex  m-4 text-xl items-center ">
          <li className="m-4 ">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className=" m-4 ">
            <Link to="/"> Home </Link>
          </li>
          <li className=" m-4 ">
            <Link to="/about"> About us </Link>
          </li>
          <li className=" m-4 ">
            <Link to="/contact"> contact us </Link>
          </li>
          <li className="m-4 ">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className=" m-4 ">Cart</li>
          <button
            className="login-button m-4 filter-btn border-none bg-green-500 rounded-xl text-white px-4 py-2"
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

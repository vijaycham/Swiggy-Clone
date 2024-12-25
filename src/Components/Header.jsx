import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(userContext)

 const cartItems = useSelector((store)=> store.cart.items);

  return (
    <div className="header flex justify-between bg-lime-50 shadow-md mb-5 border-lime-100 border-2 items-center">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="w-32" src={LOGO_URL} />
        </Link>
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
          <li className=" m-4  font-bold">
            {" "}
            <Link to="/cart"> Cart -({cartItems.length} items) </Link>
          </li>
          <button
            className="login-button m-4 filter-btn border-none bg-green-500 rounded-xl text-white px-4 py-2"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold"> {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

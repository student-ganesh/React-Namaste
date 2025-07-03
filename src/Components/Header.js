import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing Store using selector
  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem);

  return (
    <div className="flex justify-between bg-orange-100 shadow-sm sm:bg-amber-200">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="flex items-center font-extrabold text-2xl ">
        <h1>WELCOME TO MY RESTAURENT..!</h1>
      </div>
      <div className="flex items-center px-2">
        <ul className="flex p-4 m-4 text-md">
          <li>Online Status: {onlineStatus ? "📗" : "📕"}</li>
          <li className="px-2">
            <Link to="/About">About Us |</Link>
          </li>
          <li className="px-2">
            <Link to="/">Home |</Link>
          </li>
          <li className="px-2">
            <Link to="/Contact">Contact Us |</Link>
          </li>
          <li className="px-2">
            <Link to="/Grocery">Grocery |</Link>
          </li>

          <li className="px-2 cursor-pointer font-semibold">
            <Link to="/Cart">Cart({cartItem.length})|</Link>
          </li>

          <button
            className="login cursor-pointer"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

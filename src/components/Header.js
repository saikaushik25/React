import { useState } from "react";
import apple from "../../../React/apple.gif";
import icon from "../../../React/favico.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [user, setUser] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
    <div className="flex -mt-5 border-solid border-2 border-gray-200 bg-pink-200 sm:bg-green-200 lg:bg-yellow-200">
        <div>
        <img id="apple" src={apple} alt="applelogo" className="w-56 mr-32"></img>
        </div>
        <div className="w-72 p-5 items-center">
            <h1 className="w-46 mt-12 font-bold text-gray-900 text-lg">Apple Restaurant</h1>
        </div>
        <div className="flex p-3">
            <ul className="flex w-auto flex-wrap">
                <li className="p-3 mt-12">Online Status: {onlineStatus ? "🟢": "🔴" }</li>
                <li className="p-3 mt-12">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-3 mt-12"><Link to="/about">About</Link></li>
                <li className="p-3 mt-12"><Link to="/contact">Contact</Link></li>
                <li className="p-3 mt-12"><Link to="/cart">Cart</Link></li>
                <button className="p-5" onClick={() => {
                  return user === "Login" ? setUser(<img src={icon} alt="fav.ico"></img>) : setUser("Login")
                }}>{user}</button>
            </ul>
        </div>
    </div>

    );
}

export default Header;
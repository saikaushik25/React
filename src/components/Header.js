import { useState } from "react";
import apple from "../../../React/apple.gif";
import icon from "../../../React/favico.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [user, setUser] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
    <div className="header">
        <div className="logo-container">
        <img id="apple" src={apple} alt="applelogo"></img>
        </div>
        <div className="restname">
            <h1>Apple Restaurant</h1>
        </div>
        <div className="list-container">
            <ul>
                <li>Online Status: {onlineStatus ? "🟢": "🔴" }</li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <button onClick={() => {
                  return user === "Login" ? setUser(<img id="ico" src={icon} alt="fav.ico"></img>) : setUser("Login")
                }}>{user}</button>
            </ul>
        </div>
    </div>

    );
}

export default Header;
import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheets/AppNavbar.css";

function AppNavbar(props) {
  let navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn, name, setName, email, setEmail } = props;

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName(null);
    setEmail(null);
    navigate("/");
    console.log("Logged out successfully");
  };

  return (
    <>
      <div className="navbar flex flex-row justify-around">
        <h1 className="title p-4 font-bold text-4xl">Heading</h1>

        <div>
          <ul className="flex flex-row">
            <li className="p-5">
              <a href="/">Home</a>
            </li>
            <li className="p-5">
              <a href="/browse">Browse</a>
            </li>
            {isLoggedIn && (
              <li className="p-5">
                <a href="/profile">Profile</a>
              </li>
            )}
            {isLoggedIn && <li className="p-5">Logout</li>}
            {!isLoggedIn && <li className="p-5">Login</li>}
            {!isLoggedIn && (
              <li className="p-5">
                {" "}
                <a href="/signup">Sign Up</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default AppNavbar;

import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div>
        <div
          className={`heading-bar transition-all duration-500 ease-in-out w-full flex items-center ${
            isScrolled
              ? "fixed  top-0 left-0 bg-white justify-between "
              : "absolute h-screen  bg-white text-gray-700 top-1/2 left-0 transform -translate-y-1/2"
          }`}
        >
          <h1
            // className="text-4xl"
            className={` font-mono transition-all duration-500 ease-in-out font-bold ml-4 py-3 px-6 ${
              isScrolled ? "text-2xl " : "text-6xl"
            }`}
          >
            Heading
          </h1>
          {isScrolled && (
            <nav>
              <ul className="flex space-x-20 mx-5">
                <li className="transition duration-300 p-5 activelist">
                  <a href="#" className="listStyle ">
                    Home
                  </a>
                </li>
                <li className="p-5">
                  <a href="#" className="listStyle">
                    Browse
                  </a>
                </li>
                <li className="center p-5">
                  <a href="#" className="listStyle">
                    Cart
                  </a>
                </li>
                <li className="center p-5">
                  <a href="#" className="listStyle">
                    Login
                  </a>
                </li>
                <li className=" p-5">
                  <a href="#" className="listStyle">
                    Signup
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
        {/* <Home /> */}
        {/* <Login /> */}
        <Signup />
      </div>
    </>
  );
}
export default App;

import React from "react";

function Navigation() {
  return (
    <>
      <div className="flex flex-row  justify-between navtop fixed w-full">
        <h1 className="font-mono text-5xl px-4 py-2">fASHION</h1>
        <ul className="flex flex-row justify-center ">
          <li className="p-6">
            <a>Home </a>
          </li>
          <li className="p-6">
            <a>Browse </a>
          </li>
          <li className="p-6">
            <a>Login </a>
          </li>
          <li className="p-6">
            <a>Signup </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;

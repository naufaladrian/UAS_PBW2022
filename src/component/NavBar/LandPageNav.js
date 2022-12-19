import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";

export default function LandPageNav() {
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const signup = () => {
    navigate("/signup");
  };

  return (
    <>
      <h2>NoteShare</h2>
      <div className="nav-right">
        <ul className={isActive === true ? "nav-active" : ""}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <span className="border-rn"></span>
          <li>
            <p onClick={login}>Login</p>
          </li>
          <li>
            <p onClick={signup}>Sign Up</p>
          </li>
        </ul>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          isActive === false ? setActive(true) : setActive(false);
        }}
      >
        <span className={isActive === true ? "line active" : "line"}></span>
        <span className={isActive === true ? "line active" : "line"}></span>
        <span className={isActive === true ? "line active" : "line"}></span>
      </div>
    </>
  );
}

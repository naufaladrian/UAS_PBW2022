import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.scss";
import Nslogo from "../../assets/icon/nslogo.png";

export default function SignupPage() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  return (
    <>
      <main className="login-main ">
        <section className="login-left">
          <div className="log-left-cont">
            <img src={Nslogo} alt="logo" />
            <h1>
              Share Your Notes
              <br />
              Signup <span className="right-arrow">&rarr;</span>
            </h1>
          </div>
        </section>
        <section className="login-right">
          <div className="log-right-cont"></div>
          <h2>Signup</h2>
          <form>
            <hr />
            <input type="text" placeholder="Username" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <select name="grade" id="grade">
              <option value="SMP">SMP</option>
              <option value="SMA">SMA</option>
            </select>
            <br />
            <button type="submit">Signup</button>
            <hr />
          </form>
          <p onClick={login}>Already have an account? click here!</p>
        </section>
      </main>
    </>
  );
}

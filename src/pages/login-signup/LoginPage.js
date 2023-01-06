import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.scss";
import Nslogo from "../../assets/icon/nslogo.png";
import UserData from "../../Data";

export default function LoginPage() {
  const navigate = useNavigate();
  const signup = () => {
    navigate("/signup");
  };
  let pass = "";
  let user = "";
  let inputUsername = "";
  let inputPassword = "";

  pass = UserData.password;
  user = UserData.username;
  const getPassword = (password) => {
    inputPassword = password.target.value;
  };

  const getUsername = (username) => {
    inputUsername = username.target.value;
  };

  const login = (e) => {
    e.preventDefault();
    pass === inputPassword && user === inputUsername
      ? navigate("/home")
      : alert("Username/Password Salah");
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
              Login <span className="right-arrow">&rarr;</span>
            </h1>
          </div>
        </section>
        <section className="login-right">
          <div className="log-right-cont"></div>
          <h2>Login</h2>
          <form>
            <hr />
            <input type="text" placeholder="Username" onChange={getUsername} />
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={getPassword}
            />
            <br />
            <button type="submit" onClick={login}>
              Login
            </button>
            <hr />
          </form>
          <p onClick={signup}>Need an account? click here!</p>
        </section>
      </main>
      {setTimeout(
        () => alert("Login Dengan\nUsername : user123\nPassword : user123"),
        1000
      )}
    </>
  );
}

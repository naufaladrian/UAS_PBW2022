import React from "react";
import "./UnPopUpStyle.scss";
import { useNavigate } from "react-router-dom";
export default function UnPopUp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="popup-bg">
        <div className="unavailable-content">
          <h2>Maaf, situr SignUp belum tersedia</h2>
          <p>Untuk Mencoba, Silahkan Login dengan</p>
          <p>Username : user123</p>
          <p>Password : user123</p>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </>
  );
}

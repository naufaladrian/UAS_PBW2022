import React from "react";
import bookVector from "../../assets/icon/bookVector.png";
import profile from "../../assets/icon/profile.png";
import { useNavigate } from "react-router-dom";
export default function HomeNav({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <h2 onClick={() => navigate("/")}>NoteShare</h2>
      <div className="nav-right nav-flex ">
        {children}
        <div className="nav-flex">
          <img src={profile} alt="profile"></img>
          <div className="your-notes">
            <p onClick={() => navigate("/")}>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
}

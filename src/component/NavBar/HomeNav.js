import React from "react";
import bookVector from "../../assets/icon/bookVector.png";
import profile from "../../assets/icon/profile.png";
import { useNavigate } from "react-router-dom";
export default function HomeNav() {
  const navigate = useNavigate();
  return (
    <>
      <h2 onClick={() => navigate("/")}>NoteShare</h2>
      <div className="nav-right nav-flex ">
        <input type="search" placeholder="Search..." />
        <div className="nav-flex">
          <div className="your-notes">
            <img src={bookVector} alt="book" />
            <p>Your Notes</p>
          </div>
          <img src={profile} alt="profile"></img>
        </div>
      </div>
    </>
  );
}

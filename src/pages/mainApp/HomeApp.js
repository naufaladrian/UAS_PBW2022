import React, { useState, useEffect } from "react";
import NavBar from "../../component/NavBar/NavBar";
import HomeNav from "../../component/NavBar/HomeNav";
import "./HomeStyle.scss";
import addCircle from "../../assets/icon/add_circle.svg";
import DataUser from "../../Data";
import CreateNotes from "../createNotes/CreateNotes";
import "../../component/card/CardStyle.scss";

export default function HomeApp() {
  const [ispopup, setPopup] = useState(false);
  const [change, setChange] = useState("");
  const closeModal = () => {
    setPopup(false);
  };

  return (
    <>
      <NavBar>
        <HomeNav>
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => setChange(e.target.value)}
          />
        </HomeNav>
      </NavBar>
      <main className="home-main container">
        <section className="card-container">
          <img
            src={addCircle}
            id="addNotes"
            alt="add"
            onClick={() => setPopup(true)}
          />
          {DataUser.notes
            .filter((e) => e.title.toLocaleLowerCase().includes(change))
            .map((e, i) => {
              return (
                <div
                  className="card"
                  onClick={() => window.open(e.note)}
                  key={i}
                >
                  <img src={e.img} alt="" />
                  <div className="note-desc">
                    <h2>{e.title}</h2>
                    <p>{DataUser.username}</p>
                  </div>
                </div>
              );
            })}
        </section>
        <CreateNotes closeModal={closeModal} modalControl={ispopup} />
      </main>
    </>
  );
}

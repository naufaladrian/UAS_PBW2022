import React from "react";
import "./CardStyle.scss";
import DataUser from "../../data.json";

export default function Card({ key }) {
  return (
    <>
      {DataUser.map((e) => {
        return e.notes.map((notes) => {
          return (
            <div
              className="card"
              key={key}
              onClick={() => window.open(notes.note)}
            >
              <img src={notes.img} alt="" />
              <div className="note-desc" key={notes.id}>
                <h2>{notes.title}</h2>
                <p>{e.username}</p>
              </div>
            </div>
          );
        });
      })}
    </>
  );
}

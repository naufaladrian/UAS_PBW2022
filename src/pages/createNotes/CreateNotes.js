import React, { useState } from "react";
import close from "../../assets/icon/close.svg";
import Data from "../../Data";
import "./CreateNotesStyle.scss";
export default function CreateNotes({ closeModal, modalControl }) {
  const [title, setTitle] = useState("");
  const [mapel, setMapel] = useState("");
  const [kelas, setKelas] = useState("");
  const [link, setLink] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    let a = title,
      b = mapel,
      c = kelas,
      d = link,
      f =
        "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

    Data.notes.push({ mapel: b, title: a, pendidikan: c, img: f, note: d });
    console.log(Data);
    closeModal();
  };

  return (
    <>
      <main
        className=" create-note-main"
        style={{ display: modalControl ? "" : "none" }}
      >
        <h2>Tambah Catatan</h2>
        <img src={close} alt="" onClick={closeModal} />
        <form>
          <input
            type="text"
            placeholder="Judul"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <select
            name="grade"
            id="grade"
            onChange={(e) => setKelas(e.target.value)}
          >
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
          </select>
          <br />
          <select
            name="mapel"
            id="mapel"
            onChange={(e) => setMapel(e.target.value)}
          >
            <option value="Matematika">Matematika</option>
            <option value="Sejarah">Sejarah</option>
            <option value="IPA">IPA</option>
            <option value="Komputer">Komputer</option>
          </select>
          <br />
          <input
            type="url"
            placeholder="Link/Alamat Catatan"
            onChange={(e) => setLink(e.target.value)}
          />
          <br />
          <button onClick={(e) => handleSubmit(e)}>Tambah</button>
        </form>
      </main>
    </>
  );
}

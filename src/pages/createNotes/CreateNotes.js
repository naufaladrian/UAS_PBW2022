import React from "react";
// import NavBar from "../../component/NavBar/NavBar";
// import HomeNav from "../../component/NavBar/HomeNav";
import close from "../../assets/icon/close.svg";
import "./CreateNotesStyle.scss";
export default function CreateNotes({ closeModal, modalControl }) {
  return (
    <>
      {/* <NavBar>
        <HomeNav />
      </NavBar> */}
      <main
        className=" create-note-main"
        style={{ display: modalControl ? "" : "none" }}
      >
        <h2>Tambah Catatan</h2>
        <img src={close} alt="" onClick={closeModal} />
        <form>
          <input type="text" placeholder="Judul" />
          <br />
          <select name="grade" id="grade">
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
          </select>
          <br />
          <select name="mapel" id="mapel">
            <option value="Matematika">Matematika</option>
            <option value="Sejarah">Sejarah</option>
            <option value="IPA">IPA</option>
            <option value="Komputer">Komputer</option>
          </select>
          <br />
          <input type="url" placeholder="Link/Alamat Catatan" />
          <br />
        </form>
      </main>
    </>
  );
}

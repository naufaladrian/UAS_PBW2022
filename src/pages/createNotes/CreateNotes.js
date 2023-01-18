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
      f = image;
    Data.notes.push({ mapel: b, title: a, pendidikan: c, img: f, note: d });
    console.log(Data);
    closeModal();
    e.target.reset();
  };

  const [image, setImage] = useState("");

  const getImage = (e) => {
    const files = e.target.files;
    console.log(e.target.files);
    const file = files[0];
    getbase64(file);
  };
  const onLoad = (fileString) => {
    setImage(fileString);
  };
  const getbase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  return (
    <>
      <div className="popup-bg" style={{ display: modalControl ? "" : "none" }}>
        <div className=" create-note-main">
          <h2>Tambah Catatan</h2>
          <img src={close} alt="" onClick={closeModal} />
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="uploadfile-wrapper">
              <label htmlFor="files">+ Sampul</label>
              <input
                required="true"
                type="file"
                id="files"
                className="file"
                onChange={getImage}
              />
            </div>
            <br />
            <input
              required="true"
              type="text"
              className="input"
              placeholder="Judul"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <select
              required="true"
              name="grade"
              id="grade"
              onChange={(e) => setKelas(e.target.value)}
            >
              <option value="SMP">SMP</option>
              <option value="SMA">SMA</option>
              <option value="Perguruan Tinggi">Perguruan Tinggi</option>
            </select>
            <br />
            <select
              required="true"
              name="mapel"
              id="mapel"
              onChange={(e) => setMapel(e.target.value)}
            >
              <option value="Matematika">Matematika</option>
              <option value="Sejarah">Sejarah</option>
              <option value="IPA">IPA</option>
              <option value="Fisika">Fisika</option>
              <option value="Kimia">Kimia</option>
              <option value="Biologi">Biologi</option>
              <option value="Bahasa Indonesia">Bahasa Indonesia</option>
              <option value="Bahasa Inggris">Bahasa Inggris</option>
              <option value="Bahasa Daerah">Bahasa Daerah</option>
              <option value="Bahasa Asing">Bahasa Asing</option>
              <option value="Komputer">Komputer</option>
              <option value="Sosiologi">Sosiologi</option>
              <option value="Geografi">Geografi</option>
              <option value="Psokologi">Psikologi</option>
              <option value="Lainnya">Lainnya</option>
            </select>
            <br />
            <input
              required="true"
              type="url"
              className="input"
              placeholder="Link Catatan/Artikel/Referensi"
              onChange={(e) => setLink(e.target.value)}
            />
            <br />
            <button type="submit">Tambah</button>
          </form>
        </div>
      </div>
    </>
  );
}

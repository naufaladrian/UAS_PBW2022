import React, { useState } from "react";
import NavBar from "../../component/NavBar/NavBar";
import HomeNav from "../../component/NavBar/HomeNav";
import "./HomeStyle.scss";
import Card from "../../component/card/Card";
import addCircle from "../../assets/icon/add_circle.svg";
import DataUser from "../../data.json";
import CreateNotes from "../createNotes/CreateNotes";
export default function HomeApp() {
  const [ispopup, setPopup] = useState(false);
  const closeModal = () => {
    setPopup(false);
  };
  return (
    <>
      <NavBar>
        <HomeNav />
      </NavBar>
      <main className="home-main">
        <aside className="filter-container ">
          <div className="filter time-filter">
            <h2>Waktu</h2>
            <form>
              <input
                type="radio"
                id="terbaru "
                className="filt-radio"
                name="time"
                value="Terbaru"
              />
              <label htmlFor="terbaru">Terbaru</label>
              <br />
              <input
                type="radio"
                id="terlama "
                name="time"
                value="Terlama"
                className="filt-radio"
              />
              <label htmlFor="terlama">Terlama</label>
              <br />
            </form>
          </div>
          <div className="filter pendidikan-filter">
            <h2>Pendidikan</h2>
            <form>
              <input
                type="radio"
                id="smp "
                className="filt-radio"
                name="rate"
                value="smp"
              />
              <label htmlFor="smp">SMP</label>
              <br />
              <input
                type="radio"
                id="sma "
                name="rate"
                value="sma"
                className="filt-radio"
              />
              <label htmlFor="sma">SMA</label>
              <br />
            </form>
          </div>
          <div className="filter mapel-filter">
            <h2>Mata Pelajaran</h2>
            <form>
              <input
                type="radio"
                id="matematika "
                className="filt-radio"
                name="rate"
                value="matematika"
              />
              <label htmlFor="matematika">Matematika</label>
              <br />
              <input
                type="radio"
                id="ipa "
                name="rate"
                value="ipa"
                className="filt-radio"
              />
              <label htmlFor="ipa">IPA</label>
              <br />
              <input
                type="radio"
                id="sejarah"
                name="rate"
                value="sejarah"
                className="filt-radio"
              />
              <label htmlFor="sejarah">Sejarah</label>
              <br />
              <input
                type="radio"
                id="komputer"
                name="rate"
                value="komputer"
                className="filt-radio"
              />
              <label htmlFor="komputer">Komputer</label>
              <br />
            </form>
          </div>
        </aside>
        <section className="card-container">
          <img
            src={addCircle}
            id="addNotes"
            alt="add"
            onClick={() => setPopup(true)}
          />

          {DataUser.map((dataUser) => {
            return <Card key={dataUser.notes.map((e) => e.id)} />;
          })}
        </section>
        <CreateNotes closeModal={closeModal} modalControl={ispopup} />
      </main>
    </>
  );
}

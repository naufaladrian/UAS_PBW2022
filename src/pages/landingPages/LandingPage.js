import React from "react";
import book1 from "../../assets/img/book1.png";
import book2 from "../../assets/img/book2.png";
import nsLogo from "../../assets/img/Logo.png";
import phone from "../../assets/icon/phone.png";
import mail from "../../assets/icon/mail.png";
import "./LandPage.scss";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar.js";
import LandPageNav from "../../component/NavBar/LandPageNav";
export default function LandingPage() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <>
      <NavBar>
        <LandPageNav />
      </NavBar>
      <main className="land-main">
        <section id="home" className="container">
          <figure>
            <img src={book1} alt="book" />
          </figure>
          <div className="text">
            <h1>Simpan dan bagikan catatanmu dengan cara yang mudah</h1>
            <button onClick={login}>Mulai</button>
          </div>
        </section>
        <section id="about" className="container">
          <figure>
            <img src={book2} alt="book" />
          </figure>
          <div className="text">
            <h1>Tentang NoteShare</h1>
            <p>
              NoteShare merupakan website yang dikhususkan untuk para pelajar.
              Website ini digunakan untuk membagikan hasil pencarian materi atau
              referensi dalam bentuk link agar bisa diketahui banyak orang.
            </p>
          </div>
        </section>
        <section className="contact container" id="contact">
          <form>
            <h3>Contact Us</h3>
            <p>Send us a message</p>
            <input type="text" placeholder="Full Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <textarea placeholder="Message" />
            <br />
            <button>Send</button>
          </form>
          <section className="sitemap">
            <h3>Sitemap</h3>
            <ul>
              <li>-Home</li>
              <li>-About</li>
              <li>-Contact</li>
              <li>-Login</li>
              <li>-Sign up</li>
            </ul>
          </section>
          <address>
            <img src={nsLogo} alt="logo" />
            <div className="contact-item">
              <img src={phone} alt="phone" />
              <p>0000-1111-2222</p>
            </div>
            <div className="contact-item">
              <img src={mail} alt="mail" />
              <p>noteshare.id@gmail.com</p>
            </div>
          </address>
        </section>
      </main>
      <footer className="container">
        <p className="copyright">Copyright 2022 NoteShare</p>
      </footer>
    </>
  );
}

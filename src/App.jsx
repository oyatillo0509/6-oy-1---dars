import { useState } from "react";
import "./App.css";
import logo from "./assets/imgs/logo.svg";
import searchIcon from "./assets/imgs/searchIcon.svg";
import earthIcon from "./assets/imgs/earthIcon.svg";
import locationIcon from "./assets/imgs/locationIcon.svg";
import trash from "./assets/imgs/trash.svg";
import account from "./assets/imgs/account.svg";
import play from "./assets/imgs/play.svg";
import heroImg from "./assets/imgs/heroImg.png";
import axon from "./assets/imgs/axon.svg";
import jetstar from "./assets/imgs/jetstar.svg";
import expadia from "./assets/imgs/expadia.svg";
import qanats from "./assets/imgs/qanats.svg";
import one from "./assets/imgs/one.jpg";
import two from "./assets/imgs/two.jpg";
import three from "./assets/imgs/three.jpg";
import fhour from "./assets/imgs/fhour.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <header className="header">
          <section className="header__one">
            <div className="container header__one__container">
              <img src={logo} className="logo" alt="logo.svg" />
              <div className="search">
                <img
                  src={searchIcon}
                  alt="searchIcon.svg"
                  className="searchIcon"
                />
                <input
                  type="search"
                  name="searchText"
                  id="searchText"
                  placeholder="Cari apapun disini..."
                />
              </div>
              <div className="earth">
                <img src={earthIcon} alt="earthIcon.svg" />
                <select name="address1" id="address1">
                  <option value="">Bahasa Indonesia</option>
                </select>
              </div>
              <div className="location">
                <img
                  src={locationIcon}
                  alt="locationIcon.svg"
                  className="locationIcon"
                />
                <div className="locationSelect">
                  <p>Lokasi</p>
                  <select name="address2" id="addresss2" className="address2">
                    <option value="">Indonesia, Yogyakarta</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          <section className="header__two">
            <div className="container header__two__container">
              <nav className="nav">
                <select name="" id="">
                  <option value="">Gunung</option>
                </select>
                <select name="" id="">
                  <option value="">Pantai</option>
                </select>
                <select name="" id="">
                  <option value="">Kuliner</option>
                </select>
                <select name="" id="">
                  <option value="">Outbond</option>
                </select>
                <select name="" id="">
                  <option value="">Sejarah</option>
                </select>
                <select name="" id="">
                  <option value="">Edukasi</option>
                </select>
                <select name="" id="">
                  <option value="">Romantis</option>
                </select>
                <select name="" id="">
                  <option value="">Alam</option>
                </select>
              </nav>
              <div className="accountDiv">
                <img src={trash} alt="trash.svg" className="trash" />
                <img src={account} alt="account.svg" className="account" />
              </div>
            </div>
          </section>
        </header>

        <main>
          <section className="hero">
            <div className="container hero__container">
              <div className="hero__left">
                <p className="Explore"> Explore the wonderful indonesia!</p>
                <h1 className="hero__h1">
                  Liburan & nikmati <span>tempatbaru</span> di indonesia{" "}
                </h1>
                <p className="Destinize">
                  Destinize membuat kamu selalu update terkait tempat liburan
                  baru di Indonesia dengan mengikuti perkembangan para
                  influencer di sosial media ✨
                </p>
                <div>
                  <button>Mulai sekarang →</button>
                  <button>
                    <img src={play} alt="play.svg" className="play" />
                    <span className="Putar">Putar Demo</span>
                  </button>
                </div>
              </div>

              <div className="hero_right">
                <img src={heroImg} alt="heroImg.svg" className="heroImg" />
              </div>
            </div>
            <section className="companies">
              <div className="container_m">
                <img src={axon} alt="axon.svg" className="axon" />
                <img src={jetstar} alt="jetstar.svg" className="jetstar" />
                <img src={expadia} alt="expadia.svg" className="expadia" />
                <img src={qanats} alt="" className="qanats" />
              </div>
            </section>

            <div className="foter">
              <a href="#">DESTINASI FAVORIT</a>
              <div className="f_info">
                <h3>✈ • Temukan Destinasi Favoritmu </h3>
                <a href="#">Lihat semua </a>
              </div>
              <div className="f_img">
                <img src={one} alt="one.svg" className="one" />
                <img src={two} alt="two.svg" className="two" />
                <img src={three} alt="three.svg" className="three" />
                <img src={fhour} alt="four.svg" className="fhour" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Match from './assets/matchpredict.jpg'
import PremierLeague from './assets/PL.svg'

const Home = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleGetStarted = () => {
    navigate("/login");
  };

  const handleMatchPrediction = () => {
    navigate("/match");
  };

  return (
    <div>
      {/* NavBar */}
      <nav>
        <div className="nav__header">
          <div className="logo nav__logo">
            <a href="#">Predictor</a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={handleNavToggle}>
            <span><i className={navOpen ? "ri-close-line" : "ri-menu-line"}></i></span>
          </div>
        </div>
        <div>
          <ul className={`nav__links ${navOpen ? "open" : ""}`} id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="section__container header__container" id="home">
        <div className="header__image">
          <img src={PremierLeague} alt="header" />
        </div>
        <div className="header__content">
          <h1>Predict & Enjoy with <span>Predictor</span></h1>
          <p className="section__description" style={{fontSize:'1.25rem'}}>
            Join our Predictor to enjoy and predict forecast match results and crown the champions of the Premier League.
          </p>
          <div className="header__btn">
            <button className="btn" onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
      </header>

      {/* Products */}
      <section className="section__container explore__container" id="products">
        <div className="explore__image">
          <img src={Match} alt="explore" />
        </div>
        <div className="explore__content">
          <h1 className="section__header">We Predict Match Results & Game Winners</h1>
          <p className="section__description">
            Seamlessly predict the match results and the game winners based on real time and historical data with just one click. Helps to make your bettings more easier and earn more rewards with our Premier League Predictor.
          </p>
          <div className="explore__btn">
            <button className="btn" onClick={handleMatchPrediction}>
              Predict Game<span><i className="ri-arrow-right-line"></i></span>
            </button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section__container banner__container" id="about">
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-bowl-fill"></i></span>
          <h4>Predict Match Score</h4>
          <p>
            Seamlessly predict the match results based on real time and historical data with just one click. Helps to make your bettings more easier and earn more rewards.
          </p>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-truck-fill"></i></span>
          <h4>Predict Game Result</h4>
          <p>
            Customize your home team and away team to predict the game results. The game results are effective and accurate for bettings to earn rewards.
          </p>
        </div>
        <div className="banner__card">
          <span className="banner__icon"><i className="ri-star-smile-fill"></i></span>
          <h4>Predict Champions</h4>
          <p>
            Predict the crowning Champions of the Premier League based on the cummulative match results. Also predicts the points table of the entire season.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer" id="contact">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="logo footer__logo">
            <a href="#" style={{color:'#ff2882'}}>Predictor</a>
          </div>
          <p class="section__description">
            Improve your betting journey with Predictor, where every predictions are made based on real-time and historical data.
          </p>
        </div>
        <div class="footer__col">
          <h4>Product</h4>
          <ul class="footer__links">
            <li><a href="#">Score Predictor</a></li>
            <li><a href="#">Match Predictor</a></li>
            <li><a href="#">Champions Predictor</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Information</h4>
          <ul class="footer__links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <ul class="footer__links">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2024 Predictor. All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Home;
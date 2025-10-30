
import React, { useState } from 'react';
import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="App">
  <header className="header">

        <div className="navigation">
          <img src={require('./images/logo.png')} alt="Logo" className="header-logo" />
          <button 
            className={`hamburger${navOpen ? ' open' : ''}`}
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav nav-top${navOpen ? ' nav-open' : ''}`}>
            <a href="#about" onClick={() => setNavOpen(false)}>A propos</a>
            <a href="#services" onClick={() => setNavOpen(false)}>Mes services</a>
            <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
          </nav>
        </div>
        
        <div className="welcome-block">
          <div className="welcome-content">
            <div className="welcome-flex">
              <h1>Arlette <span>RH</span> Solutions</h1>
            </div>
          </div>
          <p className="welcome-citation">Consultante marketing RH et intégration professionnelle</p>


          <p className="welcome-citation-2">Révolutionnons ensemble votre attractivité et votre marque employeur!</p>
        </div>
        
        <button className="soumission-btn soumission-btn-fixed">Consultation gratuite 30 min</button>
        
      </header>
      <main className="main">
        <section id="about">
          <h2>About Us</h2>
          <p>We are a modern HR consultancy helping you grow your business.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Recruitment</li>
            <li>Training</li>
            <li>Consulting</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: contact@arlette-rh.com</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Arlette RH. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

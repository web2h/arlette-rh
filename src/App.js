
import React, { useState } from 'react';
import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="App">
  <header className="header">
        <button
          className={`hamburger${navOpen ? ' open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav nav-top${navOpen ? ' nav-open' : ''}`}>
          <img src={require('./images/logo.png')} alt="Logo" className="welcome-logo" />
          <a href="#about" onClick={() => setNavOpen(false)}>About</a>
          <a href="#services" onClick={() => setNavOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
          
        </nav>
        
        <div className="welcome-block">
          <div className="welcome-content">
            <div className="welcome-flex">
              <h1>Arlette RH Solutions</h1>
            </div>
          </div>
          <p className="welcome-citation">Solutions RH / Marketing complètes sous un même toit</p>
        </div>
        
        <button className="soumission-btn soumission-btn-fixed">Demander une soumission</button>
        
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

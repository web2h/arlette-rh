
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
      <section className="who-am-i">

        <div>
          <p className="title">Pourquoi me faire confiance?</p>
          <p className="content">
            <span>Pour les professionnels TI immigrés</span> : En 2017, j'ai moi-même vécu l'immigration professionnelle au Québec—les défis culturels, administratifs, les codes à apprivoiser. Mon conjoint a également été recruté en TI de l'étranger. Je ne vous parle pas de théorie : je sais exactement ce que vous vivez parce que je l'ai vécu. Avec une double nationalité française et canadienne et des origines congolaises, je maîtrise les réalités européennes, nord-américaines et africaines. Je suis votre partenaire qui comprend votre parcours.
            <br /><br />
            <span>Pour les PME québécoises</span> : attirer et retenir les talents qui font la différence. Dans un marché compétitif, vos candidats reçoivent plusieurs offres. Vous devez vous démarquer. Mon expertise en marketing RH et marque employeur vous aide à créer une présence authentique qui PARLE vraiment à vos talents—qu'ils soient en TI, en vente, en opérations ou ailleurs. Je comprends les réalités des PME québécoises : budgets serrés, équipes réduites, mais ambition réelle. Mes solutions sont adaptées à votre contexte et votre taille.
            <br /><br />
            <span>Ce que ça change pour vous </span> : Cette perspective rare—vivre l'immigration ET maîtriser le marketing RH pour les PME—me permet de créer des ponts authentiques. Les candidats vous trouvent parce que votre marque employeur est crédible et bien positionnée. Les professionnels immigrés réussissent leur intégration parce qu'ils arrivent mieux préparés. Pour vous, PME : vous attirez les meilleurs talents, plus vite, avec un coût de recrutement réduit.
          </p>

          <p className="title">Mon expertise</p>
          <p className="content">
            2017 : Immigration au Québec et conjoint recruté en TI au Journée Québec
            <br />
            2020‑2024 : 4 ans d’expérience en recrutement TI spécialisé
            <br />
            2023 : AEC Gestion des RH (Cégep Gérard‑Godin) – en cours
            <br />
            2025 : Création Arlette RH Solutions
            <br />
            2026 : Certificat Relations industrielles (UdeM) – prévu
            <br />
            <br />
            Je m’engage à vous accompagner avec la même attention, le même dévouement et la même passion que j’aurais aimé recevoir lors de mon arrivée au Québec !
          </p>

          <p className="title">Mes valeurs</p>
          <p className="content">
            <span>Authenticité</span> : je partage mon expérience réelle, mes défis et mes apprentissages.
            <br /><br />
            <span>Empathie</span> : je comprends vos émotions car je les ai vécues.
            <br /><br />
            <span>Excellence</span> : je m’engage à vous offrir un service de grande qualité.
            <br /><br /><br /><br />
          </p>
        </div>

        <div>
          <p className="first-name">Arlette</p>
          <p className="last-name">Kiamfu</p>
          <img src={require('./images/who-am-i.jpg')} alt="Arlette" className="arlette-photo" />
        </div>
      </section>
      <section className="why">
        <h1>Pourquoi choisir Arlette RH Solutions?</h1>

        <div class="three-columns">
          <div class="column">
            <div class="icon">🎯</div>
            <h2>PME québécoises</h2>
            <div class="subtitle">Marketing RH</div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">Audit image employeur</div>
            </div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">Stratégie d'attraction de talents</div>
            </div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">Contenu RH optimisé</div>
            </div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">Accompagnement recrutement</div>
            </div>

            <div class="proof-box">
              <div class="proof-title">Expertise</div>
              <div class="proof-text">4 ans recrutement TI. Marché québécois maîtrisé.</div>
            </div>
          </div>

          <div class="column">
            <div class="icon">💼</div>
            <h2>Professionnels TI</h2>
            <div class="subtitle">Intégration Professionnelle</div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">CV format québécois + ATS</div>
            </div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">Profil LinkedIn optimisé</div>
            </div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">Coaching entrevues</div>
            </div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">Mise en relation entreprises</div>
            </div>

            <div class="proof-box">
              <div class="proof-title">Avantage</div>
              <div class="proof-text">J'ai vécu l'immigration et comprends vos défis.</div>
            </div>
          </div>

          <div class="column">
            <div class="icon">🌐</div>
            <h2>Approche 360°</h2>
            <div class="subtitle">Solution Complète</div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">Services intégrés</div>
            </div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">CV à intégration</div>
            </div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">Gestion médias sociaux</div>
            </div>

            <div class="benefit">
              <div class="benefit-bullet">•</div>
              <div class="benefit-text">Support personnalisé</div>
            </div>

            <div class="proof-box">
              <div class="proof-title">Différence</div>
              <div class="proof-text">Solution clé en main. Parlons de vos besoins.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-services">
        <p className="title">Mes Services</p>

        <div className="services-grid">
          <div className="service-card">
            <img src={require('./images/mes-services-cv.png')} alt="Service rédaction CV TI" className="service-image" />
            <div className="service-content">
              <h3 className="service-title">Rédaction CV TI</h3>
              <ul className="service-list">
                <li>Adaptation professionelle</li>
                <li>Optimisation LinkedIn</li>
                <li>Coaching entretiens</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <img src={require('./images/mes-services-attraction.png')} alt="Service attraction" className="service-image" />
            <div className="service-content">
              <h3 className="service-title">Attraction de talents TI</h3>
              <ul className="service-list">
                <li>Accompagnement professionnel</li>
                <li>Packages couples</li>
                <li>Recherche de stages</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <img src={require('./images/mes-services-marketing.png')} alt="Service marketing" className="service-image" />
            <div className="service-content">
              <h3 className="service-title">Marketing RH PME</h3>
              <ul className="service-list">
                <li>Audit marque employeur</li>
                <li>tratégies d'attraction</li>
                <li>Contenu employeur</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <img src={require('./images/mes-services-media.png')} alt="Service médias sociaux" className="service-image" />
            <div className="service-content">
              <h3 className="service-title">Médias Sociaux</h3>
              <ul className="service-list">
                <li>Gestion LinkedIn entreprise</li>
                <li>Présence digitale employeur</li>
                <li>Gestion de médias sociaux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

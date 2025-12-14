
import React, { useState } from 'react';
import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('cv');
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (imageSrc) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

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
            <a href="#portfolio" onClick={() => setNavOpen(false)}>Mes réalisations</a>
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

        <div className="video-container">
          <iframe
            width="100%"
            height="338"
            src="https://www.youtube.com/embed/4C04vCrwd2A"
            title="L'attraction RH par Arlette RH Solutions"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <button className="soumission-btn soumission-btn-fixed">Consultation gratuite 30 min</button>

      </header>
      <section className="who-am-i" id="about">

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
            Je m'engage à vous offrir un accompagnement rigoureux et passionné. Mon expertise du marché québécois et ma compréhension authentique de vos défis font toute la différence.
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
      <section className="why" id="services">
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

            <div class="persona-citation">
              Comme Sophie, vous gérez le recrutement et votre marque employeur.<br /><br />Vous souhaitez développer votre marketing RH?
              <div class="popup-image">
                <img src={require('./images/persona-pme.png')} alt="Persona PME" />
              </div>
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

            <div class="persona-citation">
              Comme Marc, vous souhaitez augmenter votre attractivité sur le marché TI?
              <div class="popup-image">
                <img src={require('./images/persona-consultant.png')} alt="Persona Consultant" />
              </div>
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
                <li>Stratégies d'attraction</li>
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

      <section className="my-formulas">
        <h2>Mes services et formules</h2>

        <div className="service-tabs">
          <button
            className={`service-tab ${activeServiceTab === 'cv' ? 'active' : ''}`}
            onClick={() => setActiveServiceTab('cv')}
          >
            Rédaction CV
          </button>
          <button
            className={`service-tab ${activeServiceTab === 'marketing' ? 'active' : ''}`}
            onClick={() => setActiveServiceTab('marketing')}
          >
            Marketing RH Simplifié pour PME
          </button>
          <button
            className={`service-tab ${activeServiceTab === 'attraction' ? 'active' : ''}`}
            onClick={() => setActiveServiceTab('attraction')}
          >
            Attraction de talents professionnels
          </button>
          <button
            className={`service-tab ${activeServiceTab === 'medias' ? 'active' : ''}`}
            onClick={() => setActiveServiceTab('medias')}
          >
            Gestion médias sociaux simplifiée pour PME
          </button>
        </div>

        <div className="formulas-table-container">
          {activeServiceTab === 'cv' && (
            <>
              <table className="formulas-table">
                <thead>
                  <tr>
                    <th>Services</th>
                    <th>EXPRESS<br /><span className="formula-duration">Durée: 3 jours</span></th>
                    <th>COMPLÈTE<br /><span className="formula-duration">Durée: 5 jours</span></th>
                    <th>PREMIUM<br /><span className="formula-duration">Durée: 7 jours</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Révision et restructuration de votre CV existant</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Optimisation avec mots-clés sectoriels</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Mise en page professionnelle québécoise</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>1 version finale (PDF + Word)</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Entretien découverte personnalisé</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Réécriture complète du CV</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Lettre de présentation québécoise</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Optimisation LinkedIn (titre + résumé)</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Guide "Postuler au Québec" inclus</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Entretien approfondi supplémentaire</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>CV bilingue (français + anglais)</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>2 lettres de motivation personnalisées</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Coaching entretien d'une heure</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Support 30 jours post-livraison</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                </tbody>
              </table>
              <div className="formulas-notes">
                <p><strong>EXPRESS :</strong> CV déjà bien structuré nécessitant adaptation</p>
                <p><strong>COMPLÈTE :</strong> Refonte complète pour le marché québécois</p>
                <p><strong>PREMIUM :</strong> Professionnels seniors, postes spécialisés</p>
              </div>
            </>
          )}

          {activeServiceTab === 'marketing' && (
            <>
              <table className="formulas-table">
                <thead>
                  <tr>
                    <th>Services</th>
                    <th>AUDIT DE PRÉSENCE<br /><span className="formula-duration">Durée: 2 semaines</span></th>
                    <th>STRATÉGIE CIBLÉE<br /><span className="formula-duration">Durée: 3 semaines</span></th>
                    <th>CRÉATION CONTENU<br /><span className="formula-duration">Durée: 1 semaine</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Analyse section "Carrières"</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Audit LinkedIn entreprise et réseaux sociaux</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Comparaison avec 3 entreprises concurrentes</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Rapport détaillé avec recommandations (15 pages)</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Rencontre de présentation des résultats</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Analyse approfondie du poste et candidat idéal</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Rédaction de 3 annonces d'emploi optimisées</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Stratégie de diffusion multi-plateformes</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Templates d'approche candidats</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Guide d'entretiens avec questions clés</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Plan d'action détaillé sur 3 mois</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>2 sessions de suivi personnalisées</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>5 publications LinkedIn prêtes à publier</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>3 modèles d'annonces d'emploi attractives</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>1 template de page carrières optimisé</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Guide de publication avec hashtags sectoriels</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                </tbody>
              </table>
              <div className="formulas-notes">
                <p><strong>AUDIT DE PRÉSENCE :</strong> PME voulant comprendre leur image sans grand budget</p>
                <p><strong>STRATÉGIE CIBLÉE :</strong> Entreprises avec un poste difficile à combler</p>
                <p><strong>CRÉATION CONTENU :</strong> Entreprises voulant améliorer leur contenu rapidement</p>
              </div>
            </>
          )}

          {activeServiceTab === 'attraction' && (
            <>
              <table className="formulas-table">
                <thead>
                  <tr>
                    <th>Services</th>
                    <th>CONSULTANT TI</th>
                    <th>PACKAGE COUPLE TI</th>
                    <th>COUPLE MIXTE</th>
                    <th>STAGE/RECONVERSION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Entretien découverte approfondi (1.5h)</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Évaluation profil technique et soft skills (2h)</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Optimisation CV format québécois (2h)</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Révision profil LinkedIn pour marché québécois (1.5h)</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Coaching spécifique entretiens TI au Québec (1h)</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Conseils pratiques d'intégration professionnelle (1h)</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Mise en relation avec 2-3 entreprises (1h)</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Suivi post-placement pendant 1 mois (1h)</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Conseils d'intégration familiale au Québec (2h)</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Stratégie coordonnée de recherche d'emploi (2h)</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Accompagnement démarches administratives (2h)</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Réseau de contacts personnalisé selon vos profils</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>CV et conseils adaptés pour le conjoint non-TI (4h)</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                </tbody>
              </table>
              <div className="formulas-notes">
                <p><strong>CONSULTANT TI :</strong> Mon expertise basée sur mon vécu d'immigration. J'ai vécu cette expérience + mon conjoint recruté de l'étranger</p>
                <p><strong>PACKAGE COUPLE TI :</strong> Spécialement conçu pour couples de professionnels TI. Plus économique que 2 forfaits individuels</p>
                <p><strong>COUPLE MIXTE :</strong> Pour couples où un seul conjoint est en TI. Parfait pour profils professionnels différents</p>
                <p><strong>STAGE/RECONVERSION :</strong> Consultants TI juniors, nouveaux diplômés, personnes en reconversion</p>
              </div>
            </>
          )}

          {activeServiceTab === 'medias' && (
            <>
              <table className="formulas-table">
                <thead>
                  <tr>
                    <th>Services</th>
                    <th>CONFIGURATION<br /><span className="formula-duration">Total: 6h</span></th>
                    <th>GESTION BASIQUE<br /><span className="formula-duration">8h/mois</span></th>
                    <th>GESTION COMPLÈTE<br /><span className="formula-duration">15h/mois</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Création/optimisation page LinkedIn (2h)</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Rédaction complète contenu page LinkedIn entreprise (2h)</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Création visuels professionnels (1h)</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Guide de bonnes pratiques (1h)</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>8 publications LinkedIn/mois (4h)</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Réponse commentaires et messages (2h)</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>Rapport mensuel simple (1h)</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>1 consultation stratégique/mois (1h)</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                    <td className="no-check">-</td>
                  </tr>
                  <tr>
                    <td>12 publications LinkedIn + Facebook/mois (6h)</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>4 stories/posts spontanés (2h)</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Community management actif (4h)</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>1 campagne publicitaire simple/mois (2h)</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                  <tr>
                    <td>Rapport détaillé + recommandations (1h)</td>
                    <td className="no-check">-</td>
                    <td className="no-check">-</td>
                    <td className="check">✓</td>
                  </tr>
                </tbody>
              </table>
              <div className="formulas-notes">
                <p><strong>CONFIGURATION :</strong> Service ponctuel pour lancer votre présence LinkedIn professionnelle</p>
                <p><strong>GESTION BASIQUE :</strong> PME voulant une présence régulière sans se ruiner</p>
                <p><strong>GESTION COMPLÈTE :</strong> Gestion active multi-plateformes avec campagnes publicitaires</p>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <p className="title">Mes réalisations</p>

        <div className="portfolio-videos-wrapper">
          <div className="portfolio-video-container">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/tUDRS96wsaA"
              title="Mes réalisations"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="portfolio-video-container">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/4C04vCrwd2A"
              title="L'attraction RH"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="portfolio-video-container">
            <img
              src={require('./images/persona-consultant.png')}
              alt="Persona Consultant TI"
              className="portfolio-image"
              onClick={() => openFullscreen(require('./images/persona-consultant.png'))}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <div className="portfolio-video-container">
            <img
              src={require('./images/persona-pme.png')}
              alt="Persona PME"
              className="portfolio-image"
              onClick={() => openFullscreen(require('./images/persona-pme.png'))}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        {fullscreenImage && (
          <div className="fullscreen-overlay" onClick={closeFullscreen}>
            <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
            <button className="fullscreen-close" onClick={closeFullscreen}>&times;</button>
          </div>
        )}
      </section>

      <footer className="footer">
        <p>&copy; 2026 Arlette RH Solution. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

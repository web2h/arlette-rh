
import React, { useState } from 'react';
import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('cv');
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState(generateCaptcha());
  const [formStatus, setFormStatus] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double submission
    if (formStatus === 'sending') {
      return;
    }

    if (parseInt(captchaAnswer) !== captchaQuestion.answer) {
      setFormStatus('error');
      alert('Captcha incorrect. Veuillez réessayer.');
      setCaptchaQuestion(generateCaptcha());
      setCaptchaAnswer('');
      return;
    }

    setFormStatus('sending');

    try {
      // Using FormSubmit.co - a free form backend service
      // Replace this hash with the one you received in the confirmation email
      const response = await fetch('https://formsubmit.co/ajax/af8a23f99951fc4759b085b22abd9713', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name} - Arlette RH Solutions`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setFormStatus('success');
        alert('Merci pour votre message! Nous vous répondrons sous peu.');

        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
        setCaptchaAnswer('');
        setCaptchaQuestion(generateCaptcha());
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setFormStatus('error');
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement à contact@arlette-rhsolutions.ca');
      console.error('Error:', error);
    }
  };

  const openFullscreen = (imageSrc) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const openImageInNewTab = (imageSrc) => {
    window.open(imageSrc, '_blank');
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
            <div className="nav-item-with-submenu">
              <a href="#portfolio" onClick={() => setNavOpen(false)}>Mes réalisations</a>
              <div className="submenu">
                <a href="#video-offres" onClick={() => setNavOpen(false)}>Offres d'emploi en vidéo</a>
                <a href="#video-temoignages" onClick={() => setNavOpen(false)}>Témoignages d'intégration</a>
                <a href="#portfolio-blogue" onClick={() => setNavOpen(false)}>Notre blogue</a>
                <a href="#portfolio-personas" onClick={() => setNavOpen(false)}>Offres personnalisées</a>
              </div>
            </div>
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

        <a href="#contact" className="soumission-btn soumission-btn-fixed">Consultation gratuite 30 min</a>

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

            <div className="persona-citation" onClick={() => openImageInNewTab(require('./images/persona-pme.png'))}>
              Comme Sophie, vous gérez le recrutement et votre marque employeur.<br /><br />Vous souhaitez développer votre marketing RH?
              <img src={require('./images/new-tab.png')} alt="Open in new tab" className="open-tab-icon" />
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

            <div className="persona-citation" onClick={() => openImageInNewTab(require('./images/persona-consultant.png'))}>
              Comme Marc, vous souhaitez augmenter votre attractivité sur le marché TI?
              <img src={require('./images/new-tab.png')} alt="Open in new tab" className="open-tab-icon" />
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

      <section className="my-formulas" id="services">
        <h2>Mes formules</h2>

        <div className="service-tabs">
          <button
            className={`service-tab ${activeServiceTab === 'cv' ? 'active' : ''}`}
            onClick={() => setActiveServiceTab('cv')}
          >
            Rédaction CV TI
          </button>
          <button
            className={`service-tab ${activeServiceTab === 'marketing' ? 'active' : ''}`}
            onClick={() => setActiveServiceTab('marketing')}
          >
            Marketing RH PME
          </button>
          <button
            className={`service-tab ${activeServiceTab === 'attraction' ? 'active' : ''}`}
            onClick={() => setActiveServiceTab('attraction')}
          >
            Attraction de talents TI
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

      <section className="faq-section">
        <h2>Questions fréquentes</h2>

        <div className="faq-container">
          <div className="faq-item">
            <h3 className="faq-question">⏰ Combien de temps avant de voir des résultats?</h3>
            <div className="faq-answer">
              <p><strong>Cela dépend du service :</strong></p>

              <div className="faq-service-block">
                <h4>Audit présence employeur</h4>
                <ul>
                  <li>Livraison : 2 semaines</li>
                  <li>Actions actionnables immédiatement</li>
                </ul>
              </div>

              <div className="faq-service-block">
                <h4>Stratégie d'Attraction Ciblée</h4>
                <ul>
                  <li>Livraison : 3 semaines</li>
                  <li>Premiers candidats : 1-2 mois</li>
                  <li>Impact mesurable : 3-4 mois</li>
                </ul>
              </div>

              <div className="faq-service-block">
                <h4>Création Contenu Employeur</h4>
                <ul>
                  <li>Livraison : 1 semaine</li>
                  <li>Engagement : 2-4 semaines</li>
                  <li>Candidatures : 6-12 semaines</li>
                </ul>
              </div>

              <div className="faq-service-block">
                <h4>Gestion Médias Sociaux</h4>
                <ul>
                  <li>Mois 1 : Croissance et engagement</li>
                  <li>Mois 2-3 : Premiers candidats spontanés</li>
                  <li>Mois 4-6 : Flux régulier de candidatures</li>
                </ul>
              </div>

              <p className="faq-commitment"><strong>Mon engagement :</strong> Indicateurs positifs dès le 1er mois. Résultats concrets (candidatures, embauches) au trimestre 2-3</p>
            </div>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">🔄 Puis-je adapter les livrables après la livraison?</h3>
            <div className="faq-answer">
              <p><strong>Absolument ! Voici comment ça fonctionne selon chaque service :</strong></p>

              <div className="faq-service-block">
                <h4>Révisions incluses</h4>

                <p><strong>Rédaction CV :</strong></p>
                <ul>
                  <li>Formule Express : 1 révision mineure incluse (ajustements, corrections)</li>
                  <li>Formule Complète : 2 révisions incluses</li>
                  <li>Formule Premium : Révisions illimitées pendant 30 jours post-livraison</li>
                </ul>

                <p><strong>Services Marketing RH :</strong></p>
                <ul>
                  <li>Audit : 1 session de clarification incluse (1h)</li>
                  <li>Stratégie : 2 sessions de suivi pour ajustements (incluses sur 3 mois)</li>
                  <li>Contenu employeur : 1 révision complète incluse</li>
                </ul>

                <p><strong>Accompagnement TI :</strong></p>
                <ul>
                  <li>Suivi 1 mois post-placement inclus (ajustements CV, préparation nouveaux entretiens)</li>
                  <li>Support illimité par email pendant la durée de l'accompagnement</li>
                </ul>
              </div>

              <div className="faq-service-block">
                <h4>Adaptations futures (après livraison initiale)</h4>
                <p><strong>Oui, vous pouvez :</strong></p>
                <ul>
                  <li>Mettre à jour votre CV pour un nouveau poste ciblé : 99$ (vs 199$ création)</li>
                  <li>Ajuster votre stratégie marketing RH selon évolution : 499$ (vs 2,499$ nouvelle stratégie)</li>
                  <li>Modifier le contenu créé : 49$ - 149$ selon ampleur</li>
                </ul>

                <p><strong>Clients médias sociaux récurrents :</strong></p>
                <ul>
                  <li>Adaptations incluses chaque mois dans votre forfait</li>
                  <li>Ajustements stratégie selon résultats (continu)</li>
                  <li>Évolution contenu selon vos nouveaux besoins</li>
                </ul>
              </div>

              <div className="faq-service-block">
                <h4>Ma philosophie</h4>
                <p>Je ne vous abandonne pas après la livraison. Mon objectif est votre succès à long terme, pas juste "cocher une case". Si quelque chose ne fonctionne pas comme prévu ou si vos besoins évoluent, on en parle et on ajuste.</p>

                <p><strong>Exemples concrets :</strong></p>
                <ul>
                  <li>CV livré mais vous ciblez maintenant un autre type de poste ? On l'adapte ensemble.</li>
                  <li>Stratégie créée mais votre marché a changé ? On révise les priorités.</li>
                  <li>Contenu publié mais ton à ajuster ? On modifie.</li>
                </ul>

                <p className="faq-commitment"><strong>Tarif préférentiel clients existants :</strong> -20% sur tous services additionnels ou adaptations majeures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-services">
        <h2>Services à la carte rapide</h2>

        <div className="quick-services-grid">
          <div className="quick-service-item">
            <div className="quick-service-title">Révision annonce d'emploi</div>
            <div className="quick-service-duration">1h</div>
          </div>

          <div className="quick-service-item">
            <div className="quick-service-title">Optimisation profil LinkedIn personnel</div>
            <div className="quick-service-duration">2h</div>
          </div>

          <div className="quick-service-item">
            <div className="quick-service-title">Audit rapide page carrières</div>
            <div className="quick-service-duration">2h</div>
          </div>

          <div className="quick-service-item">
            <div className="quick-service-title">Création et configuration compte TikTok entreprise</div>
            <div className="quick-service-duration">3h</div>
          </div>

          <div className="quick-service-item">
            <div className="quick-service-title">Gestion mensuelle TikTok entreprise</div>
            <div className="quick-service-duration">4h/mois</div>
          </div>

          <div className="quick-service-item">
            <div className="quick-service-title">Création 1 vidéo témoignage simple</div>
            <div className="quick-service-duration">4h</div>
          </div>

          <div className="quick-service-item">
            <div className="quick-service-title">Session préparation entretien</div>
            <div className="quick-service-duration">1.5h</div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <p className="title">Mes réalisations</p>

        <div className="portfolio-videos-wrapper">
          <div className="portfolio-video-container" id="video-offres">
            <div className="portfolio-video-description">
              <h3 className="portfolio-video-title">Offres d'emploi en vidéo</h3>
              <p>Arlette RH Solutions crée des offres d'emploi captivantes en vidéo pour attirer vos talents et refléter votre culture d'entreprise</p>
            </div>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/jm1Ehv16BEo"
              title="Mes réalisations"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="portfolio-video-container" id="video-temoignages">
            <div className="portfolio-video-description">
              <h3 className="portfolio-video-title">Témoignages d'intégration</h3>
              <p>Découvrez comment Yannick et Amidou Florian, consultants TI internationaux, se sont intégrés à leur équipes de travail et au Québec. Leur histoire montre ce que vos talents recherchent vraiment.</p>
            </div>
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

          <div className="portfolio-video-container" id="portfolio-blogue">
            <div className="portfolio-video-description">
              <h3 className="portfolio-video-title">Notre blogue</h3>
              <p>Lire le témoignage complet de Yannick et Amidou Florian. Leur histoire pour guider les consultants TI internationaux dans leur intégration.</p>
            </div>
            <img
              src={require('./images/blogue-1.jpg')}
              alt="Blogue 1"
              className="portfolio-image"
              onClick={() => openFullscreen(require('./images/blogue-1.jpg'))}
              style={{ cursor: 'pointer' }}
            />
            <img
              src={require('./images/blogue-2.jpg')}
              alt="Blogue 2"
              className="portfolio-image"
              onClick={() => openFullscreen(require('./images/blogue-2.jpg'))}
              style={{ cursor: 'pointer' }}
            />
          </div>


          <div className="portfolio-video-container" id="portfolio-personas">
            <div className="portfolio-video-description">
              <h3 className="portfolio-video-title">Offres personnalisées</h3>
              <p>Nous créons des offres d'emploi sur mesure en développant des personas détaillés de vos futurs recrutements pour attirer les bons candidats.</p>
            </div>
            <img
              src={require('./images/persona-francois-2.png')}
              alt="Persona François"
              className="portfolio-image"
              onClick={() => openFullscreen(require('./images/persona-francois-2.png'))}
              style={{ cursor: 'pointer' }}
            />
            <img
              src={require('./images/persona-vincent.png')}
              alt="Persona Vincent"
              className="portfolio-image"
              onClick={() => openFullscreen(require('./images/persona-vincent.png'))}
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

      <section className="partnerships">
        <h2>Partenaires</h2>
        <div className="partners-container">
          <img src={require('./images/partners/partner-glos.png')} alt="Partner Glos" className="partner-logo" />
        </div>
      </section>

      <section className="pre-contact">
        <h2>Prêt à instaurer la paix dans votre organisation ? Contactez-moi dès aujourd'hui !</h2>

        <div className="pre-contact-content">
          <p>
            <b>Chez Arlette RH Solutions, nous croyons que la sérénité et l'harmonie sont essentielles au succès d'une entreprise.</b>
          </p>
          <p>
            Comme notre papillon, <b>Kimia</b> signifie "la paix" en lingala et représente l'équilibre et la transformation positive que nous apporterons à vos ressources humaines.
          </p>
          <p>
            <b>Pour les PME québécoises</b>, nous créons un environnement de travail où votre marque employeur rayonne, où vos talents se sentent attirés et engagés. Nous optimisons votre présence RH digitale et développons les stratégies d'attraction qui font la différence.
          </p>
          <p>
            <b>Pour les professionnels TI internationaux et locaux</b>, nous facilitons votre intégration dans les codes québécois, nous affinons votre profil professionnel et nous vous connectons aux opportunités qui correspondent à vos aspirations.
          </p>
          <p>
            Remplissez ce formulaire et découvrez comment nous pouvons créer un environnement de travail paisible et productif pour votre organisation ou votre carrière. Je serais ravie d'échanger avec vous et de construire avec vous les solutions RH qui favorisent le bien-être et la performance de vos équipes.
          </p>
        </div>

        <img src={require('./images/kimia.png')} alt="Kimia - Symbole de paix" className="kimia-decoration" />
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-container">
          <h2 className="contact-title">Formulaire de contact</h2>
          <p className="contact-subtitle">Prêt à transformer votre carrière ou votre stratégie RH? Parlons-en!</p>

          <div className="linkedin-contact">
            <span>Contactez moi aussi sur</span>
            <a href="https://www.linkedin.com/in/arlette-belloni" target="_blank" rel="noopener noreferrer" className="linkedin-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Courriel *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="votre@courriel.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Numéro de téléphone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="(514) 123-4567"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Parlez-moi de votre projet ou de vos besoins..."
              ></textarea>
            </div>

            <div className="form-group captcha-group">
              <label htmlFor="captcha">
                Vérification : Combien font {captchaQuestion.num1} + {captchaQuestion.num2} ? *
              </label>
              <input
                type="number"
                id="captcha"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                required
                placeholder="Votre réponse"
                className="captcha-input"
              />
            </div>

            <button type="submit" className="submit-btn" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Arlette RH Solution. All rights reserved.</p>
      </footer>

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Retour en haut">
          <span>↑</span>
        </button>
      )}
    </div>
  );
}

export default App;

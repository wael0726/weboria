import Layout from "@/src/layout/Layout";
import Link from "next/link";

const Services = () => {
  return (
    <Layout>
      {/* Bannière de page */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Services Digitaux
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Feuille"
                />
                pour le Web Design & Développement
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Zone de fonctionnalités */}
      <section className="feature-three-area pb-50 rpb-20 rel z-1">
        <div className="container container-1290">
          <div className="row gap-130">
            {[
              {
                id: "01",
                titre: "Développement Web",
                texte: "Création de sites modernes, optimisés et sécurisés pour tous types de projets professionnels.",
              },
              {
                id: "02",
                titre: "Développement d'applications",
                texte: "Applications performantes et intuitives pour répondre aux besoins spécifiques de vos utilisateurs.",
              },
              {
                id: "03",
                titre: "Design de produits digitaux",
                texte: "Conception UX/UI centrée utilisateur pour des interfaces fonctionnelles et esthétiques.",
              },
              {
                id: "04",
                titre: "Optimisation SEO",
                texte: "Amélioration de votre visibilité sur les moteurs de recherche pour générer du trafic qualifié.",
              },
              {
                id: "05",
                titre: "Design & Identité de marque",
                texte: "Création d’univers visuels impactants, de logos à la charte graphique complète.",
              },
              {
                id: "06",
                titre: "Conseil en informatique",
                texte: "Accompagnement stratégique et technique pour vos projets numériques.",
              },
              {
                id: "07",
                titre: "Développement commercial",
                texte: "Solutions digitales pour booster vos performances et atteindre vos objectifs business.",
              },
              {
                id: "08",
                titre: "Développement eCommerce",
                texte: "Boutiques en ligne performantes, sécurisées et pensées pour convertir.",
              },
            ].map(({ id, titre, texte }) => (
              <div className="col-md-6" key={id}>
                <div className="feature-item-three wow fadeInUp delay-0-2s">
                  <div className="top-part">
                    <span className="serial-number">{id}</span>
                    <Link legacyBehavior href="/project-list">
                      <a className="details-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/project-list">
                        <a>{titre}</a>
                      </Link>
                    </h4>
                    <p>{texte}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau défilant */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              {["Design & Identité", "Développement Web", "Applications mobiles"]
                .flatMap((item) => Array(3).fill(item))
                .map((item, idx) => (
                  <span className="marquee-item" key={idx}>
                    <i className="fas fa-star-of-life" />
                    <b>{item}</b>
                  </span>
                ))}
            </span>
          </div>
        </div>
      </div>

      {/* Étapes de travail */}
      <section className="work-process-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290 rel z-1">
          <div className="row gap-70">
            {[
              {
                étape: "01",
                titre: "Génération d'idée",
                texte:
                  "Nous écoutons votre vision et proposons des concepts adaptés à vos besoins.",
              },
              {
                étape: "02",
                titre: "Planification & Design",
                texte:
                  "Conception de l’expérience utilisateur et design graphique.",
              },
              {
                étape: "03",
                titre: "Tests et ajustements",
                texte:
                  "Tests rigoureux pour assurer la qualité et la sécurité.",
              },
              {
                étape: "04",
                titre: "Résultats livrés",
                texte:
                  "Nous vous livrons un produit final fonctionnel, rapide et prêt à l’emploi.",
              },
            ].map(({ étape, titre, texte }) => (
              <div
                className={`col-xl-3 col-md-6 ${
                  étape === "01" || étape === "03" ? "mt-60" : ""
                }`}
                key={étape}
              >
                <div className="work-step-item style-two wow fadeInUp delay-0-2s">
                  <span className="step-number">Étape {étape}</span>
                  <h4 className="title">{titre}</h4>
                  <div className="content">
                    <p>{texte}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-line-shape">
            <img
              src="assets/images/shapes/work-process-line.png"
              alt="Ligne processus"
            />
          </div>
        </div>
      </section>
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Travaillons ensemble</span>
                <h2>Vous avez un projet en tête ? Contactez-nous !</h2>
                <Link legacyBehavior href="/contact">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Discutons de votre projet</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">Travaillon ensemble</span>
      </section>
    </Layout>
  );
};

export default Services;

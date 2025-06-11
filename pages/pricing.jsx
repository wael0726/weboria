import Layout from "@/src/layout/Layout";
import Link from "next/link";

const Pricing = () => {
  return (
    <Layout>
      {/* Pourquoi nous choisir */}
      <section className="why-choose-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="row">
                <div className="col-xl-11">
                  <div className="why-choose-left-content mb-30 rmb-55 wow fadeInLeft delay-0-2s">
                    <div className="section-title mb-50">
                      <span className="sub-title mb-15">Pourquoi nous choisir</span>
                      <h2>Les avantages de travailler avec nous</h2>
                    </div>
                    <h5>Notre mission</h5>
                    <p>
                      Offrir des solutions web de qualité à des prix justes et accessibles, en misant sur l’efficacité, la transparence et une communication fluide avec nos clients.
                    </p>
                    <br />
                    <h5>Notre vision</h5>
                    <p>
                      Devenir une référence dans la création de sites performants, responsives et sécurisés, tout en garantissant un accompagnement humain et réactif à chaque étape du projet.
                    </p>
                    <Link legacyBehavior href="/about">
                      <a className="theme-btn style-two mt-35">
                        En savoir plus <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="service-item wow fadeInRight delay-0-2s">
                    <div className="icon">
                      <i className="fal fa-dollar-sign" />
                    </div>
                    <h5>
                      <a>
                        Prix concurrentiels <br /> et transparents
                      </a>
                    </h5>
                    <p>
                      Contrairement à de nombreuses agences aux tarifs abusifs, nous proposons des prix justes et honnêtes, adaptés à votre projet.
                    </p>
                  </div>

                  <div className="service-item wow fadeInRight delay-0-3s">
                    <div className="icon">
                      <i className="fal fa-rocket" />
                    </div>
                    <h5>
                      <a>
                        Résultats rapides <br /> et travail professionnel
                      </a>
                    </h5>
                    <p>
                      Nous mettons en place des solutions efficaces pour garantir une progression rapide, sans compromis sur la qualité.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="service-item mt-30 wow fadeInRight delay-0-4s">
                    <div className="icon">
                      <i className="fal fa-mobile-alt" />
                    </div>
                    <h5>
                      <a>
                        Contrôle qualité <br /> tous supports
                      </a>
                    </h5>
                    <p>
                      Tests poussés sur mobile, tablette et ordinateur. Fluidité, sécurité, et accessibilité assurées sur tous les appareils.
                    </p>
                  </div>

                  <div className="service-item wow fadeInRight delay-0-5s">
                    <div className="icon">
                      <i className="fal fa-headset" />
                    </div>
                    <h5>
                      <a>
                        Suivi client <br /> et réactivité
                      </a>
                    </h5>
                    <p>
                      Vous avez une question ? Une demande ? Nous répondons rapidement et vous accompagnons du début à la fin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forfaits */}
<section
  className="pricing-area-three pb-85 rpb-55"
  style={{
    backgroundImage:
      "url(assets/images/background/pricing-bg-dot-shape.png)",
  }}
>
  <div className="container container-1290">
    <div className="row justify-content-center">
      <div className="col-xl-8 col-lg-10">
        <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-20">Nos offres</span>
          <h2>Des forfaits adaptés à tous vos besoins web</h2>
        </div>
      </div>
    </div>

    <div className="row">
      {/* Forfait Landing Page */}
      <div className="col-xl-3 col-md-6">
        <div className="pricing-plan-item wow fadeInUp delay-0-2s">
          <div className="icon">
            <i className="flaticon-abstract" />
          </div>
          <h5>Landing Page</h5>
          <span className="price-text">
            <span className="before">$</span>
            <span className="price">500</span>
          </span>
          <ul className="list-style-one">
            <li>Site d’une seule page fluide et responsive</li>
            <li>Design personnalisé selon votre identité</li>
            <li>Formulaire de contact intégré</li>
            <li>Optimisation de base pour le référencement</li>
            <li>Chargement rapide & animations légères</li>
            <li>Adapté mobile et tablette</li>
          </ul>
          <Link legacyBehavior href="/contact">
            <a className="theme-btn w-100">
              Choisir ce forfait <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </div>

      {/* Forfait Site Vitrine */}
      <div className="col-xl-3 col-md-6">
        <div className="pricing-plan-item wow fadeInUp delay-0-3s">
          <span className="badge">
            <i className="fas fa-star-of-life" />
            <i className="fas fa-star-of-life" />
            Offre la plus populaire
            <i className="fas fa-star-of-life" />
            <i className="fas fa-star-of-life" />
          </span>
          <div className="icon">
            <i className="flaticon-liquid" />
          </div>
          <h5>Site Vitrine</h5>
          <span className="price-text">
            <span className="before">$</span>
            <span className="price">1500</span>
          </span>
          <ul className="list-style-one">
            <li>Jusqu’à 10 pages (Accueil, Services, Contact, etc.)</li>
            <li>Design sur mesure & responsive</li>
            <li>Formulaires de contact & demandes</li>
            <li>Optimisation SEO de toutes les pages</li>
            <li>Sécurité & performances renforcées</li>
            <li>Mises à jour et accompagnement inclus</li>
          </ul>
          <Link legacyBehavior href="/contact">
            <a className="theme-btn w-100">
              Choisir ce forfait <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </div>

      {/* Forfait Fonctionnalités Avancées */}
      <div className="col-xl-3 col-md-6">
        <div className="pricing-plan-item wow fadeInUp delay-0-4s">
          <div className="icon">
            <i className="flaticon-petals" />
          </div>
          <h5>Site avec Fonctionnalités</h5>
          <span className="price-text">
            <span className="before">$</span>
            <span className="price">3000</span>
          </span>
          <ul className="list-style-one">
            <li>E-commerce, réservations, dashboard sécurisé</li>
            <li>Connexion & gestion des comptes utilisateurs</li>
            <li>Base de données personnalisée</li>
            <li>Développement full-stack sur mesure</li>
            <li>Système de paiement en ligne (Stripe/PayPal)</li>
            <li>Interface d’administration simplifiée</li>
          </ul>
          <Link legacyBehavior href="/contact">
            <a className="theme-btn w-100">
              Choisir ce forfait <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </div>

      {/* Forfait Sur Mesure */}
      <div className="col-xl-3 col-md-6">
        <div className="pricing-plan-item wow fadeInUp delay-0-5s">
          <div className="icon">
            <i className="flaticon-settings" />
          </div>
          <h5>Projet Sur Mesure</h5>
          <span className="price-text">
            <span className="price">Sur devis</span>
          </span>
          <ul className="list-style-one">
            <li>Analyse personnalisée de vos besoins</li>
            <li>Conseils techniques & fonctionnels</li>
            <li>Accompagnement stratégique complet</li>
            <li>Création de cahier des charges si nécessaire</li>
            <li>Proposition de maquettes et structure UX</li>
            <li>Devis gratuit et sans engagement</li>
          </ul>
          <Link legacyBehavior href="/contact">
            <a className="theme-btn w-100">
              Demander un devis <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Travailler ensemble */}
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

export default Pricing;

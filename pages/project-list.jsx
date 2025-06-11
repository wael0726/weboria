import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ProjectList = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      {/* Page Banner End */}
      {/* Project List Area start */}
      <section className="project-list-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container">
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/dashboard.png"
                alt="Project List"
              />
              <Link legacyBehavior href="/DashboardDetails">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
                <a className="category">Produit numérique</a>
              <h2>
                <Link legacyBehavior href="/DashboardDetails">
                  <a>
                     Tableau de Bord <i>Gestion de Tâches</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Une application web intuitive de gestion de tâches, avec tableau de bord interactif, conçue pour optimiser l’organisation et la productivité.
              </p>
              <Link legacyBehavior href="/DashboardDetails">
                <a className="read-more">
                  Détails du Projet <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
                <a className="category">Produit numérique</a>
              <h2>
                <Link legacyBehavior href="/MeteoDetails">
                  <a>
                    Application Mobile de <i>Météo</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Une application mobile météo moderne offrant des prévisions précises en temps réel avec une interface claire et intuitive.
              </p>
              <Link legacyBehavior href="/MeteoDetails">
                <a className="read-more">
                  Détails du Projet <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/project-list2.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/MeteoDetails">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/ecommerce.png"
                alt="Project List"
              />
              <Link legacyBehavior href="/EcommerceDetails">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
                <a className="category">Produit numérique</a>
              <h2>
                <Link legacyBehavior href="/EcommerceDetails">
                  <a>
                    Site web <i>E-commerce</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Un site e-commerce moderne conçu pour offrir une expérience d’achat fluide, sécurisée et optimisée sur tous les appareils.
              </p>
              <Link legacyBehavior href="/EcommerceDetails">
                <a className="read-more">
                  Détails du Projet <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
                <a className="category">Produit numérique</a>
              <h2>
                <Link legacyBehavior href="/PortfolioDetails">
                  <a>
                    Contenu web pour un <i>Portfolio</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                 Un projet de portfolio innovant mettant en valeur des compétences en design et développement web pour une meilleure visibilité en ligne.
              </p>
              <Link legacyBehavior href="/PortfolioDetails">
                <a className="read-more">
                  Détails du Projet <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/portfoliopers.png"
                alt="Project List"
              />
              <Link legacyBehavior href="/RestaurantDetails">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/resto.png"
                alt="Project List"
              />
              <Link legacyBehavior href="/RestaurantDetails">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
                <a className="category">Produit numérique</a>
              <h2>
                <Link legacyBehavior href="/RestaurantDetails">
                  <a>
                    Site web de <i> restaurant</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Plateforme complète permettant la commande en ligne, la gestion des commandes et un tableau de bord pour les restaurateurs.
              </p>
              <Link legacyBehavior href="/RestaurantDetails">
                <a className="read-more">
                  Détails du Projet <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
                <a className="category">Produit numérique</a>
              <h2>
                <Link legacyBehavior href="/GarderieDetails">
                  <a>
                    Site vitrine de <i>Garderie</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Un site web informatif conçu pour présenter les services, valeurs et activités d’une enseigne et faciliter le contact avec les clients.
              </p>
              <Link legacyBehavior href="/GarderieDetails">
                <a className="read-more">
                  Détails du Projet <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/garderie.png"
                alt="Project List"
              />
              <Link legacyBehavior href="/GarderieDetails">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Project List Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
  <div className="container">
    <div className="row justify-content-center pb-45 rpb-25">
      <div className="col-xl-7 col-lg-9">
        <div className="section-title text-center wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Travaillons ensemble</span>
          <h2>Vous avez un projet en tête ? N'hésitez pas à nous contacter</h2>
          <Link legacyBehavior href="/contact">
            <a className="explore-more text-start mt-30">
              <i className="fas fa-arrow-right" />{" "}
              <span>Parlez Nous</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <span className="big-text light-opacity">Travailler ensemble</span>
</section>

      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ProjectList;

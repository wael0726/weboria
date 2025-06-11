import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const About = () => {
  return (
    <Layout>
      {/* Section Bannière de la page */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Nous sommes une agence
                <img
                  className="mxw-20"
                  src="assets/images/banner/inside-title1.png"
                  alt="titre"
                />
                <img
                  className="mxw-40"
                  src="assets/images/banner/inside-title2.png"
                  alt="titre"
                />
                de développement web digital
                <span className="arrow">
                  <img
                    className="wow fadeInLeft delay-0-6s"
                    src="assets/images/hero/title-arrow.png"
                    alt="Flèche"
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section Récompense et clients */}
      <div className="video-area-two rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="client-text text-lg-start text-center mt-40 pb-50">
                Nous accompagnons nos clients avec expertise et passion pour créer des solutions digitales sur mesure qui répondent à leurs besoins uniques.
              </div>
              <div className="row">
                <div className="col-xl-10">
                  <div className="client-logo-wrap">
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two1.png"
                          alt="Logo client"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two2.png"
                          alt="Logo client"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two3.png"
                          alt="Logo client"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <div className="video-year text-lg-end text-center rel">
                2015
                <img
                  className="leaf-shape"
                  src="assets/images/video/leaf.png"
                  alt="Feuille"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Qui sommes-nous */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Qui sommes-nous</span>
                <h2>Nous sommes une équipe professionnelle et expérimentée</h2>
              </div>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-2s">
                <div className="why-choose-header">
                  <i className="flaticon-creativity" />
                  <h5>Personnalisez votre site</h5>
                </div>
                <p>
                  Nous offrons des solutions sur mesure adaptées à vos besoins spécifiques.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header">
                  <i className="flaticon-mobile-banking" />
                  <h5>Modifiez la vue mobile</h5>
                </div>
                <p>
                  Optimisez l’expérience utilisateur sur tous les appareils mobiles.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s">
                <div className="why-choose-header">
                  <i className="flaticon-optimization-1" />
                  <h5>Optimisez les moteurs de recherche</h5>
                </div>
                <p>
                  Améliorez la visibilité de votre site grâce au référencement naturel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Logos clients */}
<section className="client-logo-area pt-130 rpt-100 pb-100 rpb-70">
  <div className="container">
    <div className="section-title text-center mb-60">
      <h4>Nous comptons plus de 120 clients satisfaits</h4>
    </div>
    <div className="client-logo-wrap">
      {/* 3 logos classiques */}
      <Link legacyBehavior href="/contact">
        <a className="client-logo-item wow fadeInUp delay-0-2s">
          <img
            src="assets/images/client-logos/client-logo1.png"
            alt="Logo client"
          />
        </a>
      </Link>
      <Link legacyBehavior href="/contact">
        <a className="client-logo-item wow fadeInUp delay-0-3s">
          <img
            src="assets/images/client-logos/client-logo2.png"
            alt="Logo client"
          />
        </a>
      </Link>
      <Link legacyBehavior href="/contact">
        <a className="client-logo-item wow fadeInUp delay-0-4s">
          <img
            src="assets/images/client-logos/client-logo3.png"
            alt="Logo client"
          />
        </a>
      </Link>

      {/* 4 logos moins connus / fictifs sous forme d’images */}
      <Link legacyBehavior href="/contact">
        <a className="client-logo-item wow fadeInUp delay-0-5s">
          <img
            src="assets/images/client-logos/exlog2.png"
            alt="Logo Synapse"
          />
        </a>
      </Link>
      <Link legacyBehavior href="/contact">
        <a className="client-logo-item wow fadeInUp delay-0-6s">
          <img
            src="assets/images/client-logos/exlog3.png"
            alt="Logo Lumina"
          />
        </a>
      </Link>
    </div>
  </div>
</section>

    </Layout>
  );
};
export default About;

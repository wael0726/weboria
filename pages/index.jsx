
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout footer={1}>
      {/* Hero Section Start */}
      <section
        className="hero-area-two pt-220 rpt-150 pb-80 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
            Création de
            <span className="arrow">
              <img
                className="wow fadeInLeft delay-0-6s"
                src="assets/images/hero/title-arrow.png"
                alt="Arrow"
              />
            </span>
             sites web
          </h1>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-3 col-lg-4">
              <div className="hero-two-content mb-50 wow fadeInRight delay-0-2s">
                <p>
                  Chez Qwebty, on cultive bien plus que votre image en ligne : on crée des sites qui vous ressemblent.
                </p>
                <img
                  className="mt-20"
                  src="assets/images/hero/arrow.png"
                  alt="Arrow"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-two-image mb-50 wow zoomIn delay-0-2s">
                <img src="assets/images/hero/hero-two.jpg" alt="Hero" />
              </div>
            </div>
            <div className="col-lg-2 text-center text-lg-start">
  <div className="hero-two-btn mb-50 wow fadeInLeft delay-0-2s d-inline-block">
    <Link legacyBehavior href="/about">
      <a className="explore-more">
        <i className="fas fa-arrow-right" />
        <span>Explorer plus</span>
      </a>
    </Link>
  </div>
</div>


          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Advertise Area Start */}
      <section className="advertise-banner-area rel z-1">
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div
                className="advertise-banner style-one bgc-primary"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/add-banner-bg.png)",
                }}
              >
                <div className="image">
                  <img src="assets/images/banner/add-banner.png" alt="Banner" />
                </div>
                <div className="content mt-20">
                  <span className="number">30+</span>
                  <h6>Projets réalisés</h6>
                  <hr />
                  <p>Nous transformons vos idées en solutions concrètes et efficaces.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
  <div className="inspire-box">
    <div className="icon-wrap">
      <i className="fas fa-bolt" />
    </div>
    <h3 className="inspire-title">Pourquoi créer un site web ?</h3>
    <p className="inspire-text">
      Cela valorise votre enseigne, vous distingue de la concurrence, et vous permet de convertir plus de clients efficacement.
    </p>
    <Link href="/contact" legacyBehavior>
      <a className="contact-bubble-btn">Devis Gratuit</a>
    </Link>
  </div>
</div>


          </div>
        </div>
      </section>
      {/* Advertise Area End */}
      {/* Skills Area Start */}
      {/* Skills Area End */}
      {/* About Us Area start */}
      <section className="about-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="about-content">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">À propos de nous</span>
                  <h2>Une agence web primée au service de vos projets</h2>
                </div>
                <div className="text-left-border mt-60 mb-65 wow fadeInUp delay-0-2s">
                  <p>
                    Chez Qwebty, chaque ligne de code est pensée pour concrétiser vos idées. Notre mission : concevoir des sites web modernes, performants et à votre image. Passionnés, créatifs et engagés, nous vous accompagnons dans chaque étape de votre transformation numérique.
                  </p>
                </div>
                <div className="about-counter">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-2s">
                        <Counter end={100} extraClass={"percent"} />
                        <span className="counter-title">
                          Clients satisfaits
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                        <Counter end={100} extraClass={"percent"} />
                        <span className="counter-title">Taux de réussite</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s">
                        <Counter end={35} />
                        <span className="counter-title">Projets complétés</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-border-shape wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/about-image-shape.png"
                  alt="About Image Shape"
                />
                <div className="bottom-border" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center justify-content-end">
            <div className="col-xl-5">
              <div className="about-content mb-35 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Ce que nous proposons</span>
                  <h2>
                    Création de sites web performants, rapides et abordables
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="service-list mb-35 wow fadeInUp delay-0-4s">
                   <ul className="list-style-three">
                <li>Design web responsive</li>
                <li>Expérience utilisateur optimisée</li>
                <li>Intégration CMS et e-Commerce</li>
                <li>Stratégie de contenu web</li>
              </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-list mb-35 wow fadeInUp delay-0-6s">
                    <ul className="list-style-three">
                      <li>Tarifs concurrentiels</li>
                <li>Livraison rapide et efficace</li>
                <li>Communication continue avec le client</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="image pt-30 wow fadeInUp delay-0-2s">
                <img src="assets/images/about/about-bottom.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
        <span className="big-text">Notre Processus</span>
      </section>
      {/* Services Page About Area end */}
      {/* Service Style Two start */}
      <section className="service-two-area pt-90 rpt-45 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-xl-10">
                  <div className="section-title mb-30 wow fadeInRight delay-0-2s">
                    <span className="sub-title mb-15">Les grandes étapes</span>
                    <h2>Les grandes étapes d’un projet web réussi</h2>
                    <div className="text pt-20">
                      Découvrez comment nous transformons vos idées en solutions digitales concrètes et performantes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="service-item style-two wow fadeInLeft delay-0-2s">
          <div className="icon">
            <i className="fal fa-gem" />
          </div>
          <h5>Élaboration de la stratégie</h5>
          <p>Analyse des besoins, des objectifs et du public cible pour poser des bases solides.</p>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="service-item style-two wow fadeInLeft delay-0-4s">
          <div className="icon">
            <i className="fal fa-ball-pile" />
          </div>
          <h5>Conception du design</h5>
          <p>Création d’une interface intuitive et esthétique, pensée pour l’utilisateur.</p>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="service-item style-two wow fadeInLeft delay-0-2s">
          <div className="icon">
            <i className="fal fa-code" />
          </div>
          <h5>Développement</h5>
          <p>Intégration front-end et back-end avec les technologies les plus adaptées à votre projet.</p>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="service-item style-two wow fadeInLeft delay-0-4s">
          <div className="icon">
            <i className="fal fa-tools" />
          </div>
          <h5>Tests & Optimisation</h5>
          <p>Vérification des performances et compatibilités avant le lancement.</p>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="service-item style-two wow fadeInLeft delay-0-6s">
          <div className="icon">
            <i className="fal fa-rocket-launch" />
          </div>
          <h5>Lancement du projet</h5>
          <p>Mise en ligne officielle et accompagnement pour une transition fluide et réussie.</p>
        </div>
      </div>
    </div>
  </div>
      </section>
      {/* Service Style Four start */}
      <section className="about-area-six pt-130 rpt-100 pb-80 rpb-50 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-md-6">
              <div className="about-content-six mb-40 wow fadeInUp delay-0-2s">
                <div className="about-logo mb-50">
                  <img
                    src="assets/images/about/circle-text-six.svg"
                    alt="Logo"
                  />
                </div>
                <div className="section-title">
                  <span className="sub-title mb-15">À propos de l'entreprise</span>
                  <h2>
                    Notre objectif principal est de satisfaire nos clients locaux et internationaux
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="about-image-six mb-50 wow fadeInUp delay-0-4s">
                <img src="assets/images/about/about-six.jpg" alt="About" />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="about-features mb-50 wow fadeInUp delay-0-4s">
                <div className="feature-six-item">
                  <div className="icon">
                    <i className="far fa-rocket-launch" />
                  </div>
                  <div className="content">
                    <h5>Notre Mission</h5>
                    <p>
                      Notre mission est de vous aider à développer votre activité en ligne en vous créant un site web professionnel qui inspire confiance, augmente votre visibilité et attire plus de clients. 
                    </p>
                    <Link className="read-more" href="services">
                      <span>En Savoir Plus</span>{" "}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="feature-six-item">
                  <div className="icon">
                    <i className="far fa-bullseye-arrow" />
                  </div>
                  <div className="content">
                    <h5>Vision et objectifs</h5>
                    <p>
                      Nous croyons que chaque entreprise, peu importe sa taille, mérite une présence en ligne forte. Notre objectif est de concevoir des sites modernes, rapides et orientés conversion pour transformer vos visiteurs en clients.
                    </p>
                    <Link className="read-more" href="services">
                      <span>En Savoir Plus</span>{" "}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* About Us Area end */}
      {/* Services Area start */}
      <section className="services-area-six pb-100 rpb-70 rel z-1">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-8">
        <div className="section-title text-center mb-70 rmb-50 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Services Populaires</span>
          <h2>Nous offrons des solutions web modernes et efficaces</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="service-six-item wow fadeInUp delay-0-2s">
          <div className="icon">
            <i className="fal fa-bezier-curve" />
          </div>
          <div className="content">
            <h5>
              <Link href="pricing">Design de sites web</Link>
            </h5>
            <p>Création de designs modernes, intuitifs et adaptés à tous les supports (mobile, tablette, ordinateur).</p>
          </div>
          <a className="details-btn" href="#">
            <i className="far fa-arrow-right" />
          </a>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="service-six-item wow fadeInUp delay-0-4s">
          <div className="icon">
            <i className="fal fa-telescope" />
          </div>
          <div className="content">
            <h5>
              <Link href="pricing">Marketing numérique</Link>
            </h5>
            <p>Optimisation SEO, publicité en ligne, et stratégie de contenu pour attirer plus de clients.</p>
          </div>
          <a className="details-btn" href="#">
            <i className="far fa-arrow-right" />
          </a>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="service-six-item wow fadeInUp delay-0-2s">
          <div className="icon">
            <i className="fal fa-mobile-alt" />
          </div>
          <div className="content">
            <h5>
              <Link href="pricing">Design d'applications mobiles</Link>
            </h5>
            <p>Conception d’interfaces fluides et attrayantes pour applications Android et iOS.</p>
          </div>
          <a className="details-btn" href="#">
            <i className="far fa-arrow-right" />
          </a>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="service-six-item wow fadeInUp delay-0-4s">
          <div className="icon">
            <i className="fal fa-laptop-code" />
          </div>
          <div className="content">
            <h5>
              <Link href="pricing">Développement web</Link>
            </h5>
            <p>Développement de sites performants, sécurisés et sur mesure adaptés à vos besoins.</p>
          </div>
          <a className="details-btn" href="#">
            <i className="far fa-arrow-right" />
          </a>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="service-six-item wow fadeInUp delay-0-2s">
          <div className="icon">
            <i className="fal fa-mail-bulk" />
          </div>
          <div className="content">
            <h5>
              <Link href="pricing">Email &amp; Marketing de contenu</Link>
            </h5>
            <p>Création de campagnes ciblées pour fidéliser votre audience et convertir vos prospects.</p>
          </div>
          <a className="details-btn" href="#">
            <i className="far fa-arrow-right" />
          </a>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="service-six-item wow fadeInUp delay-0-4s">
          <div className="icon">
            <i className="fal fa-file-contract" />
          </div>
          <div className="content">
            <h5>
              <Link href="pricing">Design graphique &amp; Branding</Link>
            </h5>
            <p>Création de logos, chartes graphiques et identités visuelles qui marquent les esprits.</p>
          </div>
          <a className="details-btn" href="#">
            <i className="far fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-lines">
    <span />
    <span />
    <span />
    <span />
  </div>
</section>
      {/* Service Style Four end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
  <div className="container-fluid">
    <div className="headline-wrap marquee">
      <span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Concéption Web</b>
        </span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Design web</b>
        </span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Développement Web</b>
        </span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Optimisation SEO</b>
        </span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Stratégie UX/UI</b>
        </span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Graphisme</b>
        </span>
      </span>
    </div>
  </div>
</div>

      {/* Headline Area end */}
      {/* Project Timeline-two Area start */}
      <section className="project-timeline-two-area pt-130 rpt-100 rel z-1">
  <div className="container container-1290">
    <div className="row">
      <div className="col-xl-6 col-lg-8">
        <div className="section-title mb-70 rmb-30 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Notre Portfolio</span>
          <h2>Découvrez Nos Récentes Réalisations</h2>
        </div>
      </div>
    </div>
    <div className="row gap-90">
      <div className="col-lg-6">
        <div className="project-timeline-two wow fadeInUp delay-0-2s">
          <span className="serial-number">01</span>
          <h4>
            <Link legacyBehavior href="/DashboardDetails">
              <a>Tableau de Bord Gestion de Tâches</a>
            </Link>
          </h4>
          <div className="image">
            <img src="assets/images/projects/dashboard.png" alt="Dashboard" />
          </div>
          <div className="right-btn">
            <Link legacyBehavior href="/DashboardDetails">
              <a><i className="fal fa-long-arrow-right" /></a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="project-timeline-two wow fadeInUp delay-0-4s">
          <span className="serial-number">02</span>
          <h4>
            <Link legacyBehavior href="/MeteoDetails">
              <a>Application Mobile de Météo</a>
            </Link>
          </h4>
          <div className="image">
            <img src="assets/images/projects/project-list2.jpg" alt="Météo" />
          </div>
          <div className="right-btn">
            <Link legacyBehavior href="/MeteoDetails">
              <a><i className="fal fa-long-arrow-right" /></a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="project-timeline-two wow fadeInUp delay-0-2s">
          <span className="serial-number">03</span>
          <h4>
            <Link legacyBehavior href="/EcommerceDetails">
              <a>Site web E-commerce</a>
            </Link>
          </h4>
          <div className="image">
            <img src="assets/images/projects/ecommerce.png" alt="E-commerce" />
          </div>
          <div className="right-btn">
            <Link legacyBehavior href="/EcommerceDetails">
              <a><i className="fal fa-long-arrow-right" /></a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="project-timeline-two wow fadeInUp delay-0-4s">
          <span className="serial-number">04</span>
          <h4>
            <Link legacyBehavior href="/PortfolioDetails">
              <a>Contenu web pour un Portfolio</a>
            </Link>
          </h4>
          <div className="image">
            <img src="assets/images/projects/portfoliopers.png" alt="Portfolio" />
          </div>
          <div className="right-btn">
            <Link legacyBehavior href="/PortfolioDetails">
              <a><i className="fal fa-long-arrow-right" /></a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="project-timeline-two wow fadeInUp delay-0-2s">
          <span className="serial-number">05</span>
          <h4>
            <Link legacyBehavior href="/RestaurantDetails">
              <a>Site web de restaurant</a>
            </Link>
          </h4>
          <div className="image">
            <img src="assets/images/projects/resto.png" alt="Restaurant" />
          </div>
          <div className="right-btn">
            <Link legacyBehavior href="/RestaurantDetails">
              <a><i className="fal fa-long-arrow-right" /></a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="project-timeline-two wow fadeInUp delay-0-4s">
          <span className="serial-number">06</span>
          <h4>
            <Link legacyBehavior href="/GarderieDetails">
              <a>Site vitrine de Garderie</a>
            </Link>
          </h4>
          <div className="image">
            <img src="assets/images/projects/garderie.png" alt="Garderie" />
          </div>
          <div className="right-btn">
            <Link legacyBehavior href="/GarderieDetails">
              <a><i className="fal fa-long-arrow-right" /></a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Project Timeline Two Area end */}
      {/* Pourquoi nous choisir - start */}
<section className="demo-area pt-100 rpt-70 rel z-1">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-8">
        <div className="why-choose-us-content">
          <div className="section-title mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Pourquoi nous choisir</span>
            <h2>Une agence web sur laquelle vous pouvez compter</h2>
          </div>
          <div className="row gap-60">
            <div className="col-md-6">
              <div className="why-choose-item wow fadeInUp delay-0-2s">
                <div className="why-choose-header">
                  <i className="far fa-chevron-right" />
                  <h5>Tarifs concurrentiels</h5>
                </div>
                <p>
                  Nous offrons un rapport qualité-prix exceptionnel sans compromis sur la qualité, grâce à une approche stratégique éprouvée.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="why-choose-item wow fadeInUp delay-0-3s">
                <div className="why-choose-header">
                  <i className="far fa-chevron-right" />
                  <h5>Développement sur mesure</h5>
                </div>
                <p>
                  Chaque projet est conçu avec rigueur et précision pour répondre parfaitement à vos objectifs d'affaires.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="why-choose-item wow fadeInUp delay-0-2s">
                <div className="why-choose-header">
                  <i className="far fa-chevron-right" />
                  <h5>Sans engagement à long terme</h5>
                </div>
                <p>
                  Flexibilité totale : démarrez, ajustez ou mettez en pause nos services selon l’évolution de vos besoins.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="why-choose-item wow fadeInUp delay-0-3s">
                <div className="why-choose-header">
                  <i className="far fa-chevron-right" />
                  <h5>Design responsive & ultra-net</h5>
                </div>
                <p>
                  Vos interfaces sont optimisées pour tous les écrans avec un rendu net, fluide et engageant, quel que soit l’appareil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="why-choose-right wow fadeInLeft delay-0-2s">
          <img
            src="assets/images/services/why-choose-right.png"
            alt="Pourquoi nous choisir"
          />
          <div className="why-choose-border-shape" />
          <div className="text-shape">
            <img
              className="text"
              src="assets/images/services/web-design-text.svg"
              alt="Texte design web"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Why Choose Us end */}
      {/* Headline area start */}
      <div className="headline-area style-two bgc-primary pt-80 pb-65">
  <div className="container-fluid">
    <div className="headline-wrap marquee">
      <span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Nos clients nous recommandent</b>
        </span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Clients à l'international</b>
        </span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Projets primés</b>
        </span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Nos clients nous recommandent</b>
        </span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Clients à l'international</b>
        </span>
        <span className="marquee-item">
          <i className="fas fa-star-of-life" />
          <b>Projets primés</b>
        </span>
      </span>
    </div>
  </div>
</div>

      {/* Headline Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-130 rpt-90">
  <div className="container container-1210">
    <div className="row">
      <div className="col-lg-6">
        <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
          <img
            src="assets/images/testimonials/testimonials-four.jpg"
            alt="Témoignage Client"
          />
          <div className="bottom-border" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="testimonial-one-right-part">
          <Swiper
            {...sliderProps.testimonialsActiveSwiper}
            className="testimonials-active wow fadeInUp delay-0-2s"
          >
            <SwiperSlide className="testimonial-item">
              <div className="author-speech">
                <p>
                  <span className="quote">“</span>
                  Nous avons confié la création du site vitrine de notre garderie à cette équipe, et nous sommes plus que satisfaits du résultat. Le site est moderne, fluide et surtout magnifique sur téléphone, un vrai plus pour les parents qui consultent en mobilité.  
                  L’équipe a été à l’écoute, professionnelle et toujours disponible pour répondre à nos demandes.  
                  <span className="quote right-quote">”</span>
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-image">
                    <img
                      src="assets/images/testimonials/author1.png"
                      alt="Client Garderie"
                    />
                  </div>
                  <div className="author-info">
                    <h4>Garderie Les Zheureux</h4>
                    <span className="designation">Direction</span>
                  </div>
                </div>
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="testimonial-item">
              <div className="author-speech">
                <p>
                  <span className="quote">“</span>
                  Une équipe à l’écoute, qui comprend nos besoins et qui répond avec professionnalisme. Nous sommes très satisfaits de notre collaboration.
                  <span className="quote right-quote">”</span>
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-image">
                    <img
                      src="assets/images/testimonials/unnamed1.png"
                      alt="Client anonyme"
                    />
                  </div>
                  <div className="author-info">
                    <h4>Salon De Coiffure</h4>
                    <span className="designation">Direction</span>
                  </div>
                </div>
                <div className="ratting style-two">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="testimonial-controls mt-75 rmt-40 wow fadeInUp delay-0-2s">
            <button className="testimonial-prev slick-arrow">
              <i className="far fa-chevron-left" />
            </button>
            <div className="testimonial-dots">
              <div className="slick-dots"></div>
            </div>
            <button className="testimonial-next slick-arrow">
              <i className="far fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonial Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pt-70 rpt-40 rel z-1">
  <div className="container">
    <div className="row justify-content-center pb-45 rpb-25">
      <div className="col-xl-7 col-lg-9">
        <div className="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Travaillons ensemble</span>
          <h2>
            Vous avez un projet en tête ? N’hésitez pas à <i>nous contacter</i>
          </h2>
          <Link legacyBehavior href="/contact">
            <a className="theme-btn style-two mt-35">
              Discutons ensemble <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Headline area start */}
<div className="headline-area rel z-1 move-top pb-120 rpb-80">
  <div className="container-fluid">
    <div className="headline-text marquee pb-20 style-two">
      <span>
        <span>Discutons ensemble</span>
      </span>
    </div>
  </div>
</div>

    </Layout>
  );
};
export default Index;

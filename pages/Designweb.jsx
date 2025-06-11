import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Designweb = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const splashes = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 40 + 10,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    }));
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let s of splashes) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <Layout>
      {/* Hero Section Start */}
      <section className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                  Agence<span>De Design</span> <i>Web</i>
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img src="assets/images/hero/hero.jpg" alt="Hero" />
            <div className="hero-social">
              <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61577088008235">
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a href="https://www.linkedin.com/company/weboriacanada">
                <i className="fab fa-linkedin" /> <span>Linkedin</span>
              </a>
              <a href="#">
                <i className="fab fa-instagram" /> <span>Instagram</span>
              </a>
              <a href="https://github.com/webforgecanada">
                <i className="fab fa-github" /> <span>Github</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg">
          <img src="assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Hero Section End */}
      
      {/* About Us Area start */}
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                <canvas 
                  ref={canvasRef} 
                  style={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '50%',
                    display: 'block'
                  }}
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">À propos de l'entreprise</span>
                  <h2>
                    Notre principal objectif&nbsp;: satisfaire nos clients locaux
                  </h2>
                </div>
                <div className="content">
                  <p>
                    Qwebty conçoit des sites web élégants et percutants, pensés pour captiver vos visiteurs tout en offrant une expérience fluide sur tous les supports.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      En savoir plus <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              Agence <span>De Design</span> Web
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      
      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-xl-5 col-lg-8">
        <div className="what-we-do-content mb-55">
          <div className="section-title mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Nos Services</span>
            <h2>Des solutions web modernes pour booster votre image et votre croissance</h2>
          </div>
          <div className="what-we-do-item wow fadeInUp delay-0-3s">
            <div className="number">
              <span>01</span>
            </div>
            <div className="content">
              <h5>Applications Mobiles</h5>
              <p>
                Des apps intuitives, rapides et élégantes pour connecter votre marque à vos clients, partout.
              </p>
              <Link legacyBehavior href="/services">
                <a className="read-more style-two">
                  <span>En savoir plus</span>{" "}
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="what-we-do-item wow fadeInUp delay-0-5s">
            <div className="number">
              <span>02</span>
            </div>
            <div className="content">
              <h5>Sites Web sur-mesure</h5>
              <p>
                Des sites performants et esthétiques, taillés pour séduire, convertir et s’adapter à tous les écrans.
              </p>
              <Link legacyBehavior href="/services">
                <a className="read-more style-two">
                  <span>En savoir plus</span>{" "}
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="what-we-do-item wow fadeInUp delay-0-7s">
            <div className="number">
              <span>03</span>
            </div>
            <div className="content">
              <h5>Solutions personnalisées</h5>
              <p>
                Chaque projet est unique. On crée des outils sur-mesure qui collent à votre vision et vos besoins.
              </p>
              <Link legacyBehavior href="/services">
                <a className="read-more style-two">
                  <span>En savoir plus</span>{" "}
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
          <img
            src="assets/images/services/what-we-do.jpg"
            alt="Nos services"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* What We Do end */}
      
      {/* Statistics Area start */}
      <div className="statistics-area pt-75 rpt-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={7} />
                <span className="counter-title">Années d'expérience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={35} />
                <span className="counter-title">Projets Réalisés</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={6} />
                <span className="counter-title">Nombre De Professionnels</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={15} />
                <span className="counter-title">Récompenses Obtenues</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      
      {/* Service Style Three start */}
      <section className="service-three-area pt-70 rpt-40 rel z-1">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-20">Notre méthode</span>
          <h2>Comment nous travaillons pour donner vie à vos projets</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="service-three-item wow fadeInUp delay-0-2s">
          <div className="title-icon">
            <h5>
              <Link legacyBehavior href="/services">
                <a>Design sur Figma</a>
              </Link>
            </h5>
            <img src="assets/images/services/icon1.png" alt="Icône" />
          </div>
          <div className="content">
            <p>On commence par créer une maquette claire et moderne sur Figma pour valider ensemble le look & feel de votre site.</p>
            <Link legacyBehavior href="/services">
              <a className="read-more style-two">
                <span>En savoir plus</span>{" "}
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="service-three-item wow fadeInDown delay-0-2s">
          <div className="title-icon">
            <h5>
              <Link legacyBehavior href="/services">
                <a>Intégration HTML</a>
              </Link>
            </h5>
            <img src="assets/images/services/icon2.png" alt="Icône" />
          </div>
          <div className="content">
            <p>Une fois le design validé, on le transforme en code HTML/CSS responsive, rapide et optimisé pour tous les écrans.</p>
            <Link legacyBehavior href="/services">
              <a className="read-more style-two">
                <span>En savoir plus</span>{" "}
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="service-three-item wow fadeInUp delay-0-2s">
          <div className="title-icon">
            <h5>
              <Link legacyBehavior href="/services">
                <a>Développement WordPress</a>
              </Link>
            </h5>
            <img src="assets/images/services/icon3.png" alt="Icône" />
          </div>
          <div className="content">
            <p>Besoin d’un site que vous pouvez gérer vous-même ? On le développe sur WordPress, sur-mesure et 100% administrable.</p>
            <Link legacyBehavior href="/services">
              <a className="read-more style-two">
                <span>En savoir plus</span>{" "}
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="service-three-item wow fadeInDown delay-0-2s">
          <div className="title-icon">
            <h5>
              <Link legacyBehavior href="/services">
                <a>Développement React</a>
              </Link>
            </h5>
            <img src="assets/images/services/icon4.png" alt="Icône" />
          </div>
          <div className="content">
            <p>Pour des projets plus complexes ou dynamiques, on utilise React pour une interface rapide, fluide et moderne.</p>
            <Link legacyBehavior href="/services">
              <a className="read-more style-two">
                <span>En savoir plus</span>{" "}
                <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Service Style Three end */}
      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>Quelques</span> Exemples
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Project Timeline Area start */}
      <section className="project-timeline-area pt-90 rpt-75 rel z-1">
  <div className="container container-1290">
    <div className="row justify-content-between align-items-center pb-25">
      <div className="col-xl-6 col-lg-8">
        <div className="section-title mb-30 wow fadeInLeft delay-0-2s">
          <span className="sub-title mb-15">Nos réalisations</span>
          <h2>Jetez un œil à nos derniers projets</h2>
        </div>
      </div>
      <div className="col-lg-4 text-lg-end">
        <Link legacyBehavior href="/project-list">
          <a className="theme-btn mb-25 wow fadeInRight delay-0-2s">
            Voir tous les projets <i className="far fa-arrow-right" />
          </a>
        </Link>
      </div>
    </div>

    {/* Projet 1 */}
    <div className="project-timeline wow fadeInUp delay-0-2s">
      <div className="content">
        <span className="serial-number">01</span>
        <h4>
          <Link legacyBehavior href="/DashboardDetails">
            <a>Tableau de Bord – Gestion de Tâches</a>
          </Link>
        </h4>
        <p>Application web intuitive avec tableau interactif, conçue pour améliorer l’organisation d’équipe.</p>
      </div>
      <div className="image">
        <img src="assets/images/projects/dashboard.png" alt="Dashboard Project" />
      </div>
      <div className="right-btn">
        <Link legacyBehavior href="/DashboardDetails">
          <a className="details-btn">
            <i className="fal fa-long-arrow-right" />
          </a>
        </Link>
      </div>
    </div>

    {/* Projet 2 */}
    <div className="project-timeline wow fadeInUp delay-0-2s">
      <div className="content">
        <span className="serial-number">02</span>
        <h4>
          <Link legacyBehavior href="/RestaurantDetails">
            <a>Site Web de Restaurant</a>
          </Link>
        </h4>
        <p>Plateforme digitale avec système de commande en ligne et interface de gestion pour restaurateurs.</p>
      </div>
      <div className="image">
        <img src="assets/images/projects/resto.png" alt="Restaurant Project" />
      </div>
      <div className="right-btn">
        <Link legacyBehavior href="/RestaurantDetails">
          <a className="details-btn">
            <i className="fal fa-long-arrow-right" />
          </a>
        </Link>
      </div>
    </div>

    {/* Projet 3 */}
    <div className="project-timeline wow fadeInUp delay-0-2s">
      <div className="content">
        <span className="serial-number">03</span>
        <h4>
          <Link legacyBehavior href="/EcommerceDetails">
            <a>Site Web E-commerce</a>
          </Link>
        </h4>
        <p>Un site marchand complet offrant une navigation fluide, un design moderne et un paiement sécurisé.</p>
      </div>
      <div className="image">
        <img src="assets/images/projects/ecommerce.png" alt="Ecommerce Project" />
      </div>
      <div className="right-btn">
        <Link legacyBehavior href="/EcommerceDetails">
          <a className="details-btn">
            <i className="fal fa-long-arrow-right" />
          </a>
        </Link>
      </div>
    </div>
  </div>
</section>
      {/* Project Timeline Area end */}
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
      {/* Headline Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Designweb;
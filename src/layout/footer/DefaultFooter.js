import Link from "next/link";

const DefaultFooter = ({ dark }) => {
  return (
    <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top pt-80 pb-60">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s animated">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logos/footer-logo-white.png"
                          : "assets/images/logos/weborialogo2.png"
                      }
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
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
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-left-content pt-80">
              <div className="lets-work mb-50 wow fadeInUp delay-0-2s animated">
                <img
                  src="assets/images/footer/lets-work.png"
                  alt="Let's Work Man"
                />
                <span>Travaillons ensemble</span>
              </div>
              <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three"
                  href="mailto:infoweboria@gmail.com"
                >
                  infoweboria@gmail.com <i className="far fa-arrow-right" />
                </a>
                <a
                  className="theme-btn style-three phone-number"
                  href="callto:+1 (438) 308 1012"
                >
                  +1 (438) 308 1012 <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-right-content">
              <h4 className="footer-title wow fadeInUp delay-0-2s animated">
                Liens utiles
              </h4>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two wow fadeInUp delay-0-3s animated">
                  <li>
                    <Link legacyBehavior href="/">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">
                      Contact
                    </Link>
                  </li>
                   <li>
                    <Link legacyBehavior href="Designweb">
                      UI/UX Design
                    </Link>
                  </li>
                </ul>
                <ul className="list-style-two wow fadeInUp delay-0-4s animated">
                  <li>
                    <Link legacyBehavior href="about">
                      À propos
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="faqs">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="pricing">
                      Tarifs
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="project-list">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div className="footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s animated">
                <ul>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated">
                <p>
                  Copyright @2025,{" "}
                  <Link legacyBehavior href="/">
                    <a>Weboria</a>
                  </Link>{" "}
                  Tous droits réservés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;

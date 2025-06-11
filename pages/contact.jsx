import { useRef } from "react";
import Layout from "@/src/layout/Layout";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_weboria",
        "template_weboria",
        formRef.current,
        "fqFetRNUL8JSkziMq"
      )
      .then(
        (result) => {
          console.log("Message envoyé :", result.text);
          toast.success("Message envoyé avec succès !");
          e.target.reset();
        },
        (error) => {
          console.error("Erreur d'envoi :", error.text);
          toast.error("Une erreur s'est produite, veuillez réessayer.");
        }
      );
  };

  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Page Banner Start */}
      {/* Page Banner End */}
      {/* Contact Form Area start */}
      <section className="contact-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">Contactez Nous</span>
                      <h2>Prêt à travailler sur vos prochains projets ?</h2>
                    </div>
                  </div>
                </div>
                <div className="row gap-80 pb-30">
                  <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5>Montréal</h5>
                      <p>
                        Lacordaire, Saint-Léonard Montréal, Canada
                      </p>
                      <a className="mailto" href="mailto:infoweboria@gmail.com">
                        infoweboria@gmail.com
                      </a>
                      <br />
                      <a className="callto" href="callto:+1 (438) 308 1012">
                        <i className="fas fa-phone" /> +1 (438) 308 1012
                      </a>
                    </div>
                  </div>
                </div>
                <h4>Suivez-nous</h4>
                <div className="social-style-two pt-15">
                  <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61577088008235">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://github.com/webforgecanada">
                    <i className="fab fa-github" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/company/weboriacanada">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">Obtenez un devis gratuit</span>
                  <h3>Laissez-nous un message</h3>
                </div>
                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="contactForm"
                >
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          className="form-control"
                          placeholder="Nom"
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i className="far fa-phone" />
                        </label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          placeholder="Numéro de téléphone"
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope" />
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="user_email"
                          className="form-control"
                          placeholder="Addresse Email"
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="far fa-pencil" />
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                          required
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two w-100"
                        >
                          Envoyer le message <i className="far fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container-fluid">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6054.948833120793!2d-73.60732480455961!3d45.596660410069816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91e54d80401b3%3A0x96c10f274223ba75!2sBd%20Lacordaire%2C%20Montr%C3%A9al%2C%20QC!5e0!3m2!1sfr!2sca!4v1749349154081!5m2!1sfr!2sca"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Location Map Area End */}
      {/* footer area start */}
    </Layout>
  );
};
export default Contact;

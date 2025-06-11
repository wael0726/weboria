import { Fragment, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideBar = () => {
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
          console.error("Erreur d’envoi :", error.text);
          toast.error("Une erreur s'est produite, veuillez réessayer.");
        }
      );
  };

  return (
    <Fragment>
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

      <div className="form-back-drop"></div>
      <section className="hidden-bar custom-sidebar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4 className="title-text">
              Obtenez un devis gratuitement
              <span className="tooltip">
                ?
                <span className="tooltip-text">
                  Un devis vous permet de décrire votre projet. Nous évaluons le
                  travail nécessaire et vous proposons un prix adapté.
                </span>
              </span>
            </h4>
          </div>

          <div className="appointment-form">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Nom"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Adresse Mail"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Décrivez votre projet..."
                  rows={5}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="custom-btn">
                  Obtenir un devis
                </button>
              </div>
            </form>
          </div>

          <div className="social-style-one">
            <a href="https://www.linkedin.com/company/weboriacanada">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61577088008235">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://github.com/webforgecanada">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
      
        .custom-sidebar {
  overflow-x: hidden;
  box-sizing: border-box;
  position: fixed; /* souvent sidebar est fixed */
  right: 0;
  top: 0;
  height: 100vh;
  width: 300px; /* ou ta largeur actuelle */
}


        .title-text {
          font-weight: 600;
          font-size: 1.3rem;
          color: var(--ygency-primary-color);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
          margin-bottom: 20px;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px 14px;
          margin-bottom: 15px;
          border-radius: 4px;
          border: 1px solid #444;
          background-color: #2b2b2b;
          color: #ddd;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.25s ease, background-color 0.25s ease;
          font-family: inherit;
        }

        input::placeholder,
        textarea::placeholder {
          color: #888;
        }

        input:focus,
        textarea:focus {
          border-color: var(--ygency-primary-color);
          background-color: #333;
          color: #fff;
        }

        /* Bouton rectangulaire avec couleurs et hover du bouton explore-more */
        .custom-btn {
          background: var(--ygency-primary-color);
          color: var(--ygency-dark-color);
          border: none;
          padding: 12px 30px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.35s ease;
          display: inline-block;
          user-select: none;
        }

        .custom-btn:hover {
          background: #fff;
          color: var(--ygency-primary-color);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        /* Responsive */
        @media only screen and (max-width: 479px) {
          .custom-btn {
            font-size: 14px;
            padding: 10px 20px;
          }
        }

        .social-style-one a {
          color: var(--ygency-primary-color);
          margin: 0 8px;
          font-size: 1.2rem;
          transition: color 0.3s ease;
        }
        .social-style-one a:hover {
          color: #7bbf7d;
        }

        .cross-icon span {
          color: var(--ygency-primary-color);
          font-size: 1.6rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .cross-icon span:hover {
          color: #7bbf7d;
        }

        /* Tooltip sobre */
        .tooltip {
          position: relative;
          display: inline-block;
          font-weight: 600;
          color: var(--ygency-primary-color);
          cursor: help;
          border-bottom: 1px dotted var(--ygency-primary-color);
          user-select: none;
          font-size: 1.1rem;
        }
        .tooltip-text {
          visibility: hidden;
          width: 220px;
          background-color: #333;
          color: #eee;
          text-align: center;
          border-radius: 5px;
          padding: 8px 12px;
          position: absolute;
          z-index: 10;
          bottom: 130%;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: opacity 0.3s;
          font-size: 0.85rem;
          line-height: 1.3;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
          pointer-events: none;
        }
        .tooltip:hover .tooltip-text {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        }
        .tooltip-text::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: #333 transparent transparent transparent;
        }
      `}</style>
    </Fragment>
  );
};

export default SideBar;

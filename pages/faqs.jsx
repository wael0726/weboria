import Layout from "@/src/layout/Layout";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Faqs = () => {
  const formRef = useRef();

  const accordionData = [
    {
      id: 1,
      title: "Quels sont les modes de paiement acceptés ?",
      content:
        "Nous acceptons les paiements par virement Interac, PayPal, ainsi que les paiements par carte directement via notre site. Les modalités seront précisées lors de la soumission du devis.",
    },
    {
      id: 2,
      title: "Est-ce que vous offrez des forfaits ou un tarif à l’heure ?",
      content:
        "Nous offrons les deux ! Selon la nature de votre projet, nous pouvons travailler au forfait fixe (projets clés en main) ou à l’heure pour des besoins ponctuels ou évolutifs.",
    },
    {
      id: 3,
      title: "Comment se déroule le processus de création d’un site web ?",
      content:
        "Notre approche comprend plusieurs étapes : découverte du projet, maquettage, développement, tests et mise en ligne. Vous êtes accompagné à chaque étape avec des validations régulières.",
    },
    {
      id: 4,
      title: "Est-ce que je peux demander des modifications une fois le site livré ?",
      content:
        "Oui, les modifications mineures comme le remplacement de textes, d’images ou de sections sont gratuites. Pour tout ajout de fonctionnalité ou modification plus complexe, un devis sera proposé selon le besoin.",
    },
    {
      id: 5,
      title: "Combien de temps faut-il pour créer un site ?",
      content:
        "Un site vitrine prend en moyenne 1 semaine. Un site e-commerce, plus complexe, peut prendre entre 2 à 4 semaines selon les fonctionnalités demandées.",
    },
    {
      id: 6,
      title: "Est-ce que je peux gérer le contenu moi-même une fois le site en ligne ?",
      content:
        "Non, nous ne fournissons pas de système d'édition par le client. Toutefois, vous pouvez nous envoyer vos demandes de modification (textes, images, etc.) et nous les appliquons gratuitement si elles sont mineures.",
    },
    {
      id: 7,
      title: "Est-ce que vous proposez aussi des services de design graphique ?",
      content:
        "Oui, en plus du développement web, nous offrons des services de design graphique comme la création de logos, de chartes graphiques, de visuels pour réseaux sociaux et plus encore.",
    },
    {
      id: 8,
      title: "Est-ce que vous travaillez uniquement avec des entreprises du Québec ?",
      content:
        "Bien que nous soyons basés au Québec, nous collaborons avec des clients partout au Canada, en Europe et ailleurs. Tous nos services sont offerts à distance ou en présentiel selon vos préférences.",
    },
  ];

  const [active, setActive] = useState(null);

  const toggle = (key) => {
    setActive(active === key ? null : key);
  };

  // Envoi du formulaire avec emailjs
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

  // Fonction pour afficher les questions accordion
  const renderAccordionItems = (items, offset = 0) =>
    items.map((item, i) => {
      const key = `collapse${i + offset}`;
      const isActive = active === key;
      return (
        <div className="accordion-item" key={item.id}>
          <h5 className="accordion-header">
            <button
              type="button"
              className={`accordion-button ${isActive ? "" : "collapsed"}`}
              aria-expanded={isActive}
              onClick={() => toggle(key)}
            >
              {item.title}
            </button>
          </h5>
          <div
            className={`accordion-collapse collapse ${isActive ? "show" : ""}`}
            style={{ transition: "height 0.3s ease" }}
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      );
    });

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
      {/* Section 1 : image à gauche + 4 premières questions */}
      <section className="faq-area pt-130 rpt-100 pb-130 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-5 order-lg-1 order-1">
              <div className="faq-iamge-part rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq-two.jpg" alt="FAQs" />
              </div>
            </div>
            <div className="col-lg-7 order-lg-2 order-2">
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Questions fréquentes</span>
                  <h2>Comment ça fonctionne ?</h2>
                </div>
                <div className="accordion">
                  {renderAccordionItems(accordionData.slice(0, 4), 0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : image à droite + 4 questions restantes */}
      <section
        className="faq-area pt-130 rpt-100 pb-130 rpb-75 rel z-1"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-7 order-lg-1 order-2">
              <div className="faq-content-part wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60" style={{ visibility: "hidden" }}>
                  {/* Vide pour garder l'alignement */}
                  <span className="sub-title mb-15">&nbsp;</span>
                  <h2>&nbsp;</h2>
                </div>
                <div className="accordion">
                  {renderAccordionItems(accordionData.slice(4, 8), 4)}
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2 order-1">
              <div className="faq-iamge-part rmt-55 wow fadeInRight delay-0-2s">
                <img src="assets/images/faqs/faq-three.png" alt="FAQs" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Area (avec logique emailjs + toast) */}
      <section className="contact-area py-130 rpy-100 rel z-1">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-9">
        <div className="section-title mb-50 text-center wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Travaillons ensemble</span>
          <h2>Collaborons sur vos prochains projets</h2>
        </div>
      </div>
      <div className="col-xl-10 col-lg-11">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="form-style-one z-1 rel wow fadeInUp delay-0-3s"
          action="#"
          name="teamForm"
          method="post"
        >
          <div className="row gap-60 pt-15">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="far fa-user" />
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="form-control"
                  placeholder="Nom complet"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">
                  <i className="far fa-envelope" />
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="form-control"
                  placeholder="Adresse email"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">
                  <i className="far fa-phone" />
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone_number"
                  className="form-control"
                  placeholder="Téléphone"
                />
              </div>
            </div>
            <div className="col-md-6 mb-50">
              <div className="form-group">
                <select name="select-subject" id="select-subject">
                  <option value="default" selected>
                    Sujet
                  </option>
                  <option value="Design">Design</option>
                  <option value="Development">Développement</option>
                  <option value="SEO">SEO</option>
                </select>
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
                  rows={4}
                  placeholder="Message"
                  required
                />
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
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default Faqs;

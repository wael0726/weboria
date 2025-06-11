import Layout from "@/src/layout/Layout";
import Link from "next/link";

const ProjectDetails = () => {
    return (
        <Layout>
            {/* Bannière du haut */}
            <section
                className="page-banner pt-210 rpt-150 pb-75 rel z-1"
                style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
            >
                <div className="container container-1290">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
                                Site e-commerce{" "}
                                <img
                                    className="mxw-10 leaf"
                                    src="assets/images/banner/leaf-small.png"
                                    alt="Feuille"
                                />
                            </h1>
                            <div className="banner-text wow fadeInUp delay-0-3s">
                                Création d’une boutique en ligne complète avec système de paiement sécurisé, gestion de stock,
                                interface administrateur intuitive et design responsive optimisé pour la conversion.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenu détaillé */}
            <section className="project-details-area pt-80 rel z-1">
                <div className="container container-1290">

                    {/* Infos projet */}
                    <div className="row pb-35 wow fadeInUp delay-0-2s">
                        <div className="col-lg-4">
                            <h3 className="title mb-30">Informations du projet</h3>
                        </div>
                        <div className="col-lg-8">
                            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                                <div className="col">
                                    <h5>Client</h5>
                                    <p className="sub-title mb-20">Gota Boutique</p>
                                </div>
                                <div className="col">
                                    <h5>Catégorie</h5>
                                    <p className="sub-title mb-20">E-commerce</p>
                                </div>
                                <div className="col">
                                    <h5>Date</h5>
                                    <p className="sub-title mb-20">14 janvier 2024</p>
                                </div>
                                <div className="col">
                                    <h5>Localisation</h5>
                                    <p className="sub-title mb-20">Lille, France</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Le défi */}
                    <div className="row pt-50 pb-70 wow fadeInUp delay-0-2s">
                        <div className="col-lg-4">
                            <h3 className="title mb-30">Le défi</h3>
                        </div>
                        <div className="col-lg-8">
                            <div className="big-letter text">
                                <span className="big-word">Le</span> défi majeur était de développer une plateforme e-commerce personnalisée,
                                capable de gérer un large catalogue produit, tout en garantissant une expérience utilisateur fluide.
                                Le client souhaitait également un système de filtrage avancé, une gestion simplifiée des commandes,
                                ainsi qu’une intégration complète avec leur outil de facturation existant.
                            </div>
                        </div>
                    </div>

                    {/* Deux images milieu */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image mb-30 wow fadeInUp delay-0-2s">
                                <img src="assets/images/projects/gota1.png" alt="Page produit" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image mb-30 wow fadeInUp delay-0-4s">
                                <img src="assets/images/projects/gota2.png" alt="Panier utilisateur" />
                            </div>
                        </div>
                    </div>

                    {/* Résultats */}
                    <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
                        <div className="col-lg-4">
                            <h3 className="title mb-30">Résultats obtenus</h3>
                        </div>
                        <div className="col-lg-8">
                            <div className="text">
                                Le site final propose une expérience d’achat fluide, un tunnel de commande optimisé,
                                et un back-office ergonomique pour gérer les produits, commandes et clients.
                                Grâce à une stratégie UX/UI efficace et une optimisation technique, le taux de conversion a augmenté de 34 % dès les premières semaines.
                                Le site est sécurisé, rapide et compatible avec tous les supports (ordinateur, tablette, mobile).
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>
            </section>

            {/* Retour à la liste des projets */}
            <section className="project-return-area">
                <div className="container container-1290">
                    <div className="text-center pt-100 pb-100">
                        <h3 className="mb-30">Vous souhaitez découvrir d'autres projets ?</h3>
                        <Link legacyBehavior href="/project-list">
                            <a className="btn-retour-projets">
                                Retour à la liste des projets
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ProjectDetails;

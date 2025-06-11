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
                                Portfolio web{" "}
                                <img
                                    className="mxw-10 leaf"
                                    src="assets/images/banner/leaf-small.png"
                                    alt="Feuille"
                                />
                            </h1>
                            <div className="banner-text wow fadeInUp delay-0-3s">
                                Développement d’un portfolio professionnel pour une designer indépendante.
                                Objectif : présenter ses projets, services et témoignages clients de façon claire, élégante et performante.
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
                                    <p className="sub-title mb-20">Yuna A.</p>
                                </div>
                                <div className="col">
                                    <h5>Catégorie</h5>
                                    <p className="sub-title mb-20">Portfolio</p>
                                </div>
                                <div className="col">
                                    <h5>Date</h5>
                                    <p className="sub-title mb-20">3 mars 2024</p>
                                </div>
                                <div className="col">
                                    <h5>Localisation</h5>
                                    <p className="sub-title mb-20">Bordeaux, France</p>
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
                                <span className="big-word">Créer</span> une vitrine digitale élégante et rapide,
                                avec un back-office simple pour ajouter ou modifier ses projets. 
                                Le design devait refléter l’univers graphique de la cliente tout en assurant une excellente lisibilité,
                                sur desktop comme sur mobile. Le tout sans dépendre de plateformes externes type Behance ou Dribbble.
                            </div>
                        </div>
                    </div>

                    {/* Deux images milieu */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image mb-30 wow fadeInUp delay-0-2s">
                                <img src="assets/images/projects/A1.png" alt="Page d’accueil du portfolio" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image mb-30 wow fadeInUp delay-0-4s">
                                <img src="assets/images/projects/A2.png" alt="Section projets" />
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
                                Le portfolio final est rapide, esthétique et simple à gérer. Yuna peut y publier ses projets,
                                ajouter des témoignages ou mettre à jour sa bio depuis une interface personnalisée.
                                Le site est hébergé sur un domaine personnalisé et référencé pour les moteurs de recherche.
                                Les retours des visiteurs sont très positifs, et les demandes de collaboration ont augmenté dès le premier mois.
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

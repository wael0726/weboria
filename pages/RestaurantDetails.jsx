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
                                Restaurant & Dashboard admin{" "}
                                <img
                                    className="mxw-10 leaf"
                                    src="assets/images/banner/leaf-small.png"
                                    alt="Feuille"
                                />
                            </h1>
                            <div className="banner-text wow fadeInUp delay-0-3s">
                                Création d’un site web complet pour un restaurant avec commande en ligne, paiements Stripe
                                et un tableau de bord d’administration pour gérer les menus, réservations, et le suivi des livraisons.
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
                                    <p className="sub-title mb-20">FreshEat</p>
                                </div>
                                <div className="col">
                                    <h5>Catégorie</h5>
                                    <p className="sub-title mb-20">Restauration</p>
                                </div>
                                <div className="col">
                                    <h5>Date</h5>
                                    <p className="sub-title mb-20">28 avril 2024</p>
                                </div>
                                <div className="col">
                                    <h5>Localisation</h5>
                                    <p className="sub-title mb-20">California, USA</p>
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
                                <span className="big-word">Le</span> restaurant souhaitait digitaliser son activité avec un site moderne, responsive,
                                et un espace d’administration complet. L’objectif était de permettre aux clients de commander en ligne
                                et de payer directement via Stripe, tout en offrant au gérant un tableau de bord clair
                                pour suivre les commandes, gérer les statuts de préparation/livraison et analyser les ventes.
                            </div>
                        </div>
                    </div>

                    {/* Deux images milieu */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image mb-30 wow fadeInUp delay-0-2s">
                                <img src="assets/images/projects/fresh1.png" alt="Page commande du restaurant" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image mb-30 wow fadeInUp delay-0-4s">
                                <img src="assets/images/projects/fresh2.png" alt="Dashboard admin commandes" />
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
                                Le site a permis d’automatiser les commandes avec un tunnel d’achat fluide
                                (ajout au panier, paiement Stripe, confirmation en temps réel). 
                                Le dashboard admin permet de suivre chaque commande (statuts : reçu, en préparation, livré),
                                modifier le menu à tout moment, et accéder aux statistiques de vente quotidiennes.
                                Le restaurant a vu ses ventes en ligne tripler en 2 mois.
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

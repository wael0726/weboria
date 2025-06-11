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
                                Application météo intuitive{" "}
                                <img
                                    className="mxw-10 leaf"
                                    src="assets/images/banner/leaf-small.png"
                                    alt="Feuille"
                                />
                            </h1>
                            <div className="banner-text wow fadeInUp delay-0-3s">
                                Développement d’une application mobile moderne permettant de consulter la météo locale et internationale
                                avec une interface simple, des animations météo en temps réel, et une ergonomie pensée pour une expérience fluide.
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
                                    <p className="sub-title mb-20">SkyFlow Agency</p>
                                </div>
                                <div className="col">
                                    <h5>Catégorie</h5>
                                    <p className="sub-title mb-20">Application mobile</p>
                                </div>
                                <div className="col">
                                    <h5>Date</h5>
                                    <p className="sub-title mb-20">12 mars 2024</p>
                                </div>
                                <div className="col">
                                    <h5>Localisation</h5>
                                    <p className="sub-title mb-20">Vancouver, Canada</p>
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
                                <span className="big-word">Le</span> challenge était de concevoir une application légère, rapide et
                                agréable à utiliser sur tous types d’écrans. Elle devait intégrer des données météo fiables,
                                des cartes interactives, et offrir un design moderne tout en restant accessible aux utilisateurs
                                moins technophiles. Le tout avec une navigation fluide, même en conditions réseau limitées.
                            </div>
                        </div>
                    </div>

                    {/* Deux images milieu */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image mb-30 wow fadeInUp delay-0-2s">
                                <img src="assets/images/projects/project-list2.jpg" alt="Application météo" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image mb-30 wow fadeInUp delay-0-4s">
                                <img src="assets/images/projects/meteo1.jpg" alt="Application météo" />
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
                                L’application permet une consultation météo rapide, avec prévisions sur 7 jours,
                                alertes météo géolocalisées, et un design épuré qui s’adapte au thème jour/nuit.
                                Elle est disponible sur iOS et Android, avec un taux de satisfaction utilisateur de 96 %
                                grâce à sa simplicité, sa rapidité d’exécution et ses données actualisées en temps réel.
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

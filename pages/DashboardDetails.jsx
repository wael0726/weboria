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
                                Tableau de bord sur mesure{" "}
                                <img
                                    className="mxw-10 leaf"
                                    src="assets/images/banner/leaf-small.png"
                                    alt="Feuille"
                                />
                            </h1>
                            <div className="banner-text wow fadeInUp delay-0-3s">
                                Conception et développement d’une interface de gestion intuitive avec tableaux de bord dynamiques,
                                indicateurs en temps réel et visualisations de données interactives. L’objectif : centraliser les données,
                                automatiser les suivis et améliorer la prise de décision.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image principale du projet */}

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
                                    <p className="sub-title mb-20">Webtend Digital Studio</p>
                                </div>
                                <div className="col">
                                    <h5>Catégorie</h5>
                                    <p className="sub-title mb-20">Développement Web</p>
                                </div>
                                <div className="col">
                                    <h5>Date</h5>
                                    <p className="sub-title mb-20">25 février 2023</p>
                                </div>
                                <div className="col">
                                    <h5>Localisation</h5>
                                    <p className="sub-title mb-20">Melbourne, Australie</p>
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
                                <span className="big-word">Le</span> principal défi consistait à développer une plateforme ergonomique et performante,
                                capable de traiter et visualiser des volumes importants de données, sans ralentissement.
                                Le client souhaitait également une gestion multi-utilisateurs avec des niveaux d’accès
                                personnalisés, tout en respectant des contraintes strictes en matière de sécurité.
                            </div>
                        </div>
                    </div>

                    {/* Deux images milieu */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image mb-30 wow fadeInUp delay-0-2s">
                                <img src="assets/images/projects/dash1.png" alt="Projet" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image mb-30 wow fadeInUp delay-0-4s">
                                <img src="assets/images/projects/dash2.png" alt="Projet" />
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
                                Le tableau de bord final offre un suivi précis des indicateurs clés,
                                des visualisations de données interactives, une navigation rapide et une compatibilité mobile totale.
                                Grâce à l’optimisation du code et à une architecture modulaire, la plateforme reste performante même avec une base de données volumineuse.
                                Les utilisateurs peuvent facilement filtrer, exporter ou analyser les données sans perte de fluidité.
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

import Link from "next/link";

import { Fragment, useState } from "react";
const Menu = ({ singleMenu }) => {
  return (
    <Fragment>
      {singleMenu ? (
        <SingleMenu />
      ) : (
        <Fragment>
          <DaskTopMenu />
          <MobileMenu />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Menu;

const DaskTopMenu = () => {
  return (
    <ul className="navigation d-none d-lg-flex desktop-menu">
  <li className="dropdown">
    <a href="/">Accueil</a>
    <ul>
      <li>
        <Link legacyBehavior href="/">
          <a>Dévelopment Web</a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="/Designweb">
          <a>Design Web</a>
        </Link>
      </li>
    </ul>
  </li>
      <li>
        <Link legacyBehavior href="about">
          À propos
        </Link>
      </li>
      <li className="dropdown">
        <a href="/faqs">FAQs</a>
      </li>
      <li className="dropdown">
        <a href="/pricing">Tarifs</a>
      </li>
      <li className="dropdown">
        <a href="/services">Services</a>
      </li>
      <li className="dropdown">
        <a href="/project-list">Portoflio</a>
      </li>
      <li className="dropdown">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation d-block d-lg-none mobile-menu">
      <li className="dropdown">
        <a href="/">Accueil</a>
        <ul style={activeLi("home")}>
          <li className="dropdown">
            <li>
                <Link legacyBehavior href="/">
                  Dévelopment Web
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="Designweb">
                  Design Web 
                </Link>
              </li>
          </li>
        </ul>
        <div className="dropdown-btn" onClick={() => activeMenuSet("home")}>
          <span className="far fa-plus" />
        </div>
      </li>
      <li>
        <Link legacyBehavior href="about">
          À propos
        </Link>
      </li>
      <li className="dropdown">
        <a href="/faqs">FAQs</a>
      </li>
      <li className="dropdown">
        <a href="/pricing">Tarifs</a>
      </li>
      <li className="dropdown">
        <a href="/services">Services</a>
        <ul style={activeLi("Services")}>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/project-list">Portfolio</a>
      </li>
      <li className="dropdown">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

const SingleMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="#home">Accueil</a>
      </li>
      <li>
        <a href="#about">about</a>
      </li>
      <li>
        <a href="#services">services</a>
      </li>
      <li>
        <a href="#projects">project</a>
      </li>
      <li>
        <a href="#pricing">pricing</a>
      </li>
      <li>
        <a href="#news">news</a>
      </li>
    </ul>
  );
};

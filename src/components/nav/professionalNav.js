import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import Logo from "assets/logo/logo.webp";

const links = [
  {
    path: "Home",
    label: "/professional",
  },
  {
    path: "About",
    label: "/professional-about",
  },
  {
    path: "Membership",
    label: "/professional-membership",
  },
  {
    path: "Services",
    label: "/professional-services",
  },
  {
    path: "Corporate",
    label: "/professional-corporate",
  },
  {
    path: "Blog",
    label: "/blog",
  },
  {
    path: "Contact us",
    label: "/professional-contact",
  },
];

const ProfessionalNav = () => {
  const [menuToggleIcon, setMenuToggleIcon] = useState(false);

  const router = useRouter();

  const toggleMenuIcon = () => {
    setMenuToggleIcon(!menuToggleIcon);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-holder">
          <Link href="/">
            <div className="logo-img">
              <Image src={Logo} alt="logo" layout="fill" />
            </div>
          </Link>
        </div>
        <div className="navbar-item">
          <ul>
            {links.map((link) => (
              <li key={`navbar-item-${link.path}`}>
                <Link href={link.label}>
                  <a
                    className={
                      router.pathname == `${link.label}` ? "active" : ""
                    }
                  >
                    {link.path}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <Link href="/">
                <button className="custom-btn skel-btn far-left">
                  Patient Portal
                </button>
              </Link>
            </li>
            <li className="with-link">
              <a href="https://doctoora.com/user/login">Login</a>
            </li>
            <li>
              <button className="custom-btn nav-btn">Get Started</button>
            </li>
          </ul>
        </div>
        <div
          className={`nav-mobile ${menuToggleIcon ? "change" : ""}`}
          onClick={() => toggleMenuIcon()}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        {menuToggleIcon ? (
          <div
            className="sidebar animated fadeInLeft"
            onClick={() => toggleMenuIcon()}
          >
            <ul className="menu-holder">
              {links.map((link) => (
                <li key={`navbar-item-${link.path}`}>
                  <Link href={link.label}>
                    <a
                      className={
                        router.pathname == `${link.label}` ? "active" : ""
                      }
                    >
                      {link.path}
                    </a>
                  </Link>
                </li>
              ))}
              <li>
                <button className="custom-btn side-btn1">Get Started</button>
              </li>
              <li>
                <Link href="https://app.doctoora.com/doctor/login">
                  <button className="custom-btn side-btn2">Login</button>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <button className="custom-btn side-btn3">
                    Patient Portal
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ProfessionalNav;

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Getstarted from 'components/modal/getstarted';
import Logo from 'assets/logo/logo.webp';

const links = [
  {
    path: 'Home',
    label: '/',
  },
  {
    path: 'About',
    label: '/about',
  },
  {
    path: 'Membership',
    label: '/membership',
  },
  {
    path: 'Services',
    label: '/services',
  },
  {
    path: 'Corporate',
    label: '/corporate',
  },
  {
    path: 'Contact us',
    label: '/contact',
  },
];

const PatientNav = () => {
  const [menuToggleIcon, setMenuToggleIcon] = useState(false);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

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
                      router.pathname == `${link.label}` ? 'active' : ''
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
              <Link href="/professional">
                <button className="custom-btn skel-btn far-left">
                  Professional Portal
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
          className={`nav-mobile ${menuToggleIcon ? 'change' : ''}`}
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
                        router.pathname == `${link.label}` ? 'active' : ''
                      }
                    >
                      {link.path}
                    </a>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="custom-btn side-btn1"
                  onClick={() => {
                    openModal();
                  }}
                >
                  Get Started
                </button>
              </li>
              <li>
                <Link href="https://app.doctoora.com">
                  <button className="custom-btn side-btn2">Login</button>
                </Link>
              </li>
              <li>
                <Link href="/professional">
                  <button className="custom-btn side-btn3">
                    Professional Portal
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <Getstarted onOk={closeModal} onCancel={closeModal} open={visible} />
    </>
  );
};

export default PatientNav;

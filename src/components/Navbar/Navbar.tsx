import Container from "@/src/containers/Container/Container";
import Link from "next/link";
import { FC, useState } from "react";
import styles from "./Navbar.module.css";
import { renderDropDownLinks } from "./Navbar.utils";

const Navbar: FC = () => {
  const [isMobileNavbarActive, setIsMobileNavbarActive] = useState(false);
  const [isMobileDropdownActive, setIsMobileDropdownActive] = useState(false);

  const isActiveMobileNavbarCSSClass = `${
    isMobileNavbarActive ? "is-active" : ""
  }`;
  const isActiveMobileDropdownCSSClass = `${
    isMobileDropdownActive ? "is-active" : ""
  }`;

  const toggleMobileNavbar = () => {
    setIsMobileNavbarActive(!isMobileNavbarActive);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownActive(!isMobileDropdownActive);
  };

  return (
    <nav
      className="navbar is-black is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <Container>
        <div className="navbar-brand">
          <Link className="navbar-item is-size-4" href="/">
            NEXT NEWS
          </Link>

          <a
            role="button"
            className={`navbar-burger burger ${isActiveMobileNavbarCSSClass}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMobileNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${styles.navbarMenu} ${isActiveMobileNavbarCSSClass}`}
        >
          <div className="navbar-start">
            <div className="navbar-item">
              <Link
                href="/search"
                className={`navbar-item ${styles.isNotHoverable} has-text-white is-size-6`}
              >
                Search
              </Link>

              <div className={`dropdown ${isActiveMobileDropdownCSSClass}`}>
                <div className="dropdown-trigger">
                  <a
                    className={`navbar-item navbar-link ${styles.isNotHoverable} has-text-white`}
                    aria-haspopup="true"
                    onClick={toggleMobileDropdown}
                  >
                    Categories
                  </a>
                </div>
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                  <div className="dropdown-content">
                    {renderDropDownLinks()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

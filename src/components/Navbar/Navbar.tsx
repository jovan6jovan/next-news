import Container from "@/src/containers/Container/Container";
import { Context } from "@/src/store/context";
import { ActionType } from "@/src/store/types";
import Link from "next/link";
import { FC, useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { renderDropDownLinks } from "./Navbar.utils";

const Navbar: FC = () => {
  const { state, dispatch } = useContext(Context);
  const { isDropdownMenuOpen } = state;
  const [isMobileNavbarActive, setIsMobileNavbarActive] = useState(false);

  const isActiveMobileNavbarCSSClass = `${
    isMobileNavbarActive ? "is-active" : ""
  }`;
  const isActiveDropdownCSSClass = `${isDropdownMenuOpen ? "is-active" : ""}`;

  const toggleMobileNavbar = () =>
    setIsMobileNavbarActive(!isMobileNavbarActive);

  const toggleDropdown = () =>
    dispatch({
      type: ActionType.SET_IS_DROPDOWN_MENU_OPEN,
      payload: !isDropdownMenuOpen,
    });

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

              <div className={`dropdown ${isActiveDropdownCSSClass}`}>
                <div className="dropdown-trigger">
                  <a
                    className={`navbar-item navbar-link ${styles.isNotHoverable} has-text-white`}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
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

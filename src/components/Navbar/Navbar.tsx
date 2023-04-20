import Container from "@/src/containers/Container/Container";
import { Context } from "@/src/store/context";
import { ActionType } from "@/src/store/types";
import Link from "next/link";
import { FC, useContext } from "react";
import styles from "./Navbar.module.css";
import { renderDropDownLinks } from "./Navbar.utils";

const Navbar: FC = () => {
  const { state, dispatch } = useContext(Context);
  const { isMobileMenuOpen, isDropdownMenuOpen } = state;

  const isActiveMobileNavbarCSSClass = `${isMobileMenuOpen ? "is-active" : ""}`;
  const isActiveDropdownCSSClass = `${isDropdownMenuOpen ? "is-active" : ""}`;

  const toggleMobileMenu = () =>
    dispatch({
      type: ActionType.SET_IS_MOBILE_MENU_OPEN,
      payload: !isMobileMenuOpen,
    });

  const toggleDropdownMenu = () =>
    dispatch({
      type: ActionType.SET_IS_DROPDOWN_MENU_OPEN,
      payload: !isDropdownMenuOpen,
    });

  const handleNavbarLinkClick = () =>
    dispatch({
      type: ActionType.SET_IS_MOBILE_MENU_OPEN,
      payload: false,
    });

  return (
    <nav
      className="navbar is-black is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <Container>
        <div className="navbar-brand">
          <Link
            className="navbar-item is-size-4"
            href="/"
            onClick={handleNavbarLinkClick}
          >
            NEXT NEWS
          </Link>

          <a
            role="button"
            className={`navbar-burger burger ${isActiveMobileNavbarCSSClass}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleMobileMenu}
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
                onClick={handleNavbarLinkClick}
              >
                Search
              </Link>

              <div className={`dropdown ${isActiveDropdownCSSClass}`}>
                <div className="dropdown-trigger">
                  <a
                    className={`navbar-item navbar-link ${styles.isNotHoverable} has-text-white`}
                    aria-haspopup="true"
                    onClick={toggleDropdownMenu}
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

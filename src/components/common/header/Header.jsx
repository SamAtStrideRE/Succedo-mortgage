import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiChevronDown, FiChevronUp, FiPhone } from "react-icons/fi";
import logo from "../../../images/logo-light.png";
import "./header.css";

const Header = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);

  const toggleClass = () => {
    setisMenu(!isMenu);
    setResponsiveclose(!isResponsiveclose);
  };

  const [isMenuSubMenu1, setMenuSubMenu1] = useState(false);
  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
  const [isMenuSubMenu3, setMenuSubMenu3] = useState(false);

  const handleSubmenuHover = (submenuStateSetter, newState) => {
    setMenuSubMenu1(false);
    setMenuSubMenu2(false);
    setMenuSubMenu3(false);
    submenuStateSetter(newState);
  };

  return (
    <header className="header__middle">
      <div className="header__middle__logo">
        <NavLink exact activeClassName="is-active" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <nav className="main-nav">
        <span className="menubar__button" onClick={toggleClass}>
          <FiAlignRight />
        </span>

        <ul className={`main-menu ${isMenu ? "menuq2" : ""}`}>
          <li className="menu-item">
            <NavLink exact activeClassName="is-active" to="/">
              Home
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink activeClassName="is-active" to="/About">
              About Us
            </NavLink>
          </li>
          <li
            className="menu-item sub__menus__arrows"
            onMouseEnter={() => handleSubmenuHover(setMenuSubMenu1, true)}
            onMouseLeave={() => handleSubmenuHover(setMenuSubMenu1, false)}
          >
            <Link to="">
              Mortgage Products{" "}
              {isMenuSubMenu1 ? <FiChevronUp /> : <FiChevronDown />}
            </Link>
            {isMenuSubMenu1 && (
              <ul className="sub__menus">
                <li>
                  <a
                    href="https://mortgage-calculator-tutorial.vercel.app/"
                    className="is-active"
                    target=""
                    rel="noopener noreferrer"
                  >
                    Mortgage Calculator
                  </a>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/FHA">
                    FHA Loans
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/VA">
                    VA Loans
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li
            className="menu-item sub__menus__arrows"
            onMouseEnter={() => handleSubmenuHover(setMenuSubMenu2, true)}
            onMouseLeave={() => handleSubmenuHover(setMenuSubMenu2, false)}
          >
            <Link to="#">
              Rates {isMenuSubMenu2 ? <FiChevronUp /> : <FiChevronDown />}
            </Link>
            {isMenuSubMenu2 && (
              <ul className="sub__menus">
                <li>
                  <NavLink activeClassName="is-active" to="/CurrentRates">
                    Current rates
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/FAR">
                    Factors Affecting Rates
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/RateTrends">
                    Rate Trends
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li
            className="menu-item sub__menus__arrows"
            onMouseEnter={() => handleSubmenuHover(setMenuSubMenu3, true)}
            onMouseLeave={() => handleSubmenuHover(setMenuSubMenu3, false)}
          >
            <Link to="#">
              Apply Here {isMenuSubMenu3 ? <FiChevronUp /> : <FiChevronDown />}
            </Link>
            {isMenuSubMenu3 && (
              <ul className="sub__menus">
                <li>
                  <NavLink activeClassName="is-active" to="/OA">
                    Online Application
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/DC">
                    Document Checklist
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/AP">
                    Application Process
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item">
            <NavLink activeClassName="is-active" to="/Contact">
              Contact
            </NavLink>
          </li>
          <li className="menu-item">
            <Link to="/ApplyNow" className="apply-btn">
              Apply Now
            </Link>
          </li>
          <li className="menu-item">
            <a href="tel:6023449333" className="phone-icon">
              <FiPhone />
              (602) 344-9333
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

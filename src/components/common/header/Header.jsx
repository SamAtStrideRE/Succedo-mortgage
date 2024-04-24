import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiAlignRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
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
  const toggleSubmenu1 = () => {
    setMenuSubMenu1(!isMenuSubMenu1);
  };

  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
  const toggleSubmenu2 = () => {
    setMenuSubMenu2(!isMenuSubMenu2);
  };

  const [isMenuSubMenu3, setMenuSubMenu3] = useState(false);
  const toggleSubmenu3 = () => {
    setMenuSubMenu3(!isMenuSubMenu3);
  };

  return (
    <header className="header__middle">
      {/* Add Logo  */}
      <div className="header__middle__logo">
        <NavLink exact activeClassName="is-active" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <nav className="main-nav">
        {/* Responsive Menu Button */}
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
          <li className="menu-item sub__menus__arrows">
            <Link to="#" onClick={toggleSubmenu1}>
              Mortgage Products {isMenuSubMenu1 ? <FiChevronUp /> : <FiChevronDown />}
            </Link>
            {isMenuSubMenu1 && (
              <ul className="sub__menus">
                <li>
                  <NavLink activeClassName="is-active" to="/Online">
                    Fixed-rate Mortgages
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/Offline">
                    FHA Loans
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/Offline">
                    VA Loans
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item sub__menus__arrows">
            <Link to="#" onClick={toggleSubmenu2}>
              Rates {isMenuSubMenu2 ? <FiChevronUp /> : <FiChevronDown />}
            </Link>
            {isMenuSubMenu2 && (
              <ul className="sub__menus">
                <li>
                  <NavLink activeClassName="is-active" to="/Online">
                    Current rates
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/Offline">
                    Factors Affecting Rates
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/Offline">
                    Rate Trends
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item sub__menus__arrows">
            <Link to="#" onClick={toggleSubmenu3}>
              Apply Here {isMenuSubMenu3 ? <FiChevronUp /> : <FiChevronDown />}
            </Link>
            {isMenuSubMenu3 && (
              <ul className="sub__menus">
                <li>
                  <NavLink activeClassName="is-active" to="/Online">
                    Online Application
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/Offline">
                    Document Checklist
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/Offline">
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;

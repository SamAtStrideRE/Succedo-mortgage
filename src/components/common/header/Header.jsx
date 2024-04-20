import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FiAlignRight,
  FiXCircle,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import logo from "../../../images/logo.png";
import "./header.css";

const Header = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  function setMenuHandler() {
    setisMenu((currState) => !currState);
  }

  return (
    <header className="header__middle">
      {/* Add Logo  */}
      <div className="header__middle__logo">
        <NavLink exact activeClassName="is-active" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <nav className="main-nav ">
        {/* Responsive Menu Button */}

        {/* <span className="menubar__button">
          <FiXCircle />
        </span> */}

        <span className="menubar__button">
          <FiAlignRight />
        </span>

        <ul className={boxClass.join(" ")}>
          <li className="menu-item">
            <NavLink
              exact
              activeClassName="is-active"
              onClick={toggleClass}
              to={`/`}
            >
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li className="menu-item ">
            <NavLink
              onClick={toggleClass}
              activeClassName="is-active"
              to={`/About`}
            >
              {" "}
              About{" "}
            </NavLink>{" "}
          </li>
          <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
            {" "}
            <Link to="#" onClick={setMenuHandler}>
              {" "}
              Shop {isMenu ? <FiChevronDown /> : <FiChevronUp />}{" "}
            </Link>
            {isMenu && (
              <ul className={boxClassSubMenu.join(" ")}>
                <li>
                  {" "}
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Online`}
                  >
                    {" "}
                    Online Shop{" "}
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Offline`}
                  >
                    {" "}
                    Offline Shop{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item ">
            <NavLink
              onClick={toggleClass}
              activeClassName="is-active"
              to={`/Contact`}
            >
              {" "}
              Contact{" "}
            </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

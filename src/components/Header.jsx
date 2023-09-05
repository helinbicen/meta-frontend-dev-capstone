import Logo from "../assets/Logo.svg";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

function Header() {
  const [navClick, setNavClick] = useState(false);
  const handleNavClick = () => setNavClick(!navClick);

  const [sectionClick, setSectionClick] = useState(false);
  const handleSectionClick = () => setSectionClick(!sectionClick);

  const menuItems = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id: 3, name: "menu" },
    { id: 4, name: "reservations" },
    { id: 5, name: "testimonials" },
    { id: 6, name: "Login" },
  ];

  const listItems = menuItems.map((item, key) => {
    return (
      <li key={item.id}>
        {" "}
        <Link to={`${"#" + item.name}`} smooth onClick={handleNavClick}>
          {item.name}
        </Link>
      </li>
    );
  });
  return (
    <BrowserRouter>
      <header className="header content-wrapper">
        <a href="/">
          <img src={Logo} alt="Little Lemon Logo" className="logo" />
        </a>
        <nav>
          <ul className={navClick ? "nav active" : "nav"}>{listItems}</ul>

          <div onClick={handleNavClick} className="hamburger">
            {navClick ? (
              <AiOutlineClose className="hamburgerIcon" />
            ) : (
              <AiOutlineMenu className="hamburgerIcon" />
            )}
          </div>
        </nav>
      </header>
    </BrowserRouter>
  );
}

export default Header;

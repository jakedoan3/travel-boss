import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/App.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        <Link className="title" to="/">
          Travel Boss
        </Link>
        <ul>
          <li>
            <NavLink to="/bio">Bio</NavLink>
          </li>
          {/* <li>
            <NavLink to="/testimonials">Testimonials</NavLink>
          </li> */}
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;

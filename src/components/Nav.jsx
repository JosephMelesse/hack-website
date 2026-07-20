import { Link, NavLink } from "react-router-dom";
import TranslateButton from "./TranslateButton.jsx";
import logo from "../assets/logo.png";

// Header per wireframe pp. 01-02: logo left, links center, actions right;
// on mobile the links drop to a second row.
function Nav({ t, spanish, onToggle }) {
  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link to="/" className="site-header__brand">
          <img src={logo} alt="Gorditas Santa Maria" width="56" height="56" />
        </Link>
        <nav className="site-nav" aria-label="Main">
          <NavLink to="/">{t?.nav?.home}</NavLink>
          <NavLink to="/menu">{t?.nav?.menu}</NavLink>
          <NavLink to="/about">{t?.nav?.about}</NavLink>
          <NavLink to="/contact">{t?.nav?.contact}</NavLink>
        </nav>
        <div className="site-header__actions">
          <TranslateButton
            spanish={spanish}
            onToggle={onToggle}
            label={t?.translate}
          />
        </div>
      </div>
      <div className="tile-divider" aria-hidden="true"></div>
    </header>
  );
}

export default Nav;

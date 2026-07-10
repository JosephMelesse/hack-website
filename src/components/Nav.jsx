import { Link } from "react-router-dom";

// Route links work; styling and the real phone number are TODO.
function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {/* TODO : replace # with tel: link once phone number is set */}
      <a href="#">Call Us</a>
    </nav>
  );
}

export default Nav;

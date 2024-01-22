import { Link } from "react-router-dom";
import "./NavBar.scss";
import logoBean from "../../assets/icons/logo-beans.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__container">
          <li className="navbar__item logo">
            <Link to="/">
              <img src={logoBean} alt="Logo" />
            </Link>
          </li>
          <li className="navbar__item fz_12">
            <Link to="/coffee">Coffee house</Link>
          </li>
          <li className="navbar__item fz_12">
            <Link to="/coffee-item">Coffee house</Link>
          </li>
          <li className="navbar__item fz_12">
            <Link to="/goods">For your pleasure</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

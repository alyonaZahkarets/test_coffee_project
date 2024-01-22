import "./Footer.scss";

import logoBeanBlack from "../../assets/icons/logo-beans-black.png";
import coffeeBeansBlack from "../../assets/icons/coffee-beans-black.png";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__menu">
            <li className="footer__item logo">
              <a href="#main">
                <img src={logoBeanBlack} alt="Logo" />
              </a>
            </li>
            <li className="footer__item fz_12">
              <a href="#page">Coffee house</a>
            </li>
            <li className="footer__item fz_12">
              <a href="#page">Coffee house</a>
            </li>
            <li className="footer__item fz_12">
              <a href="#page">For your pleasure</a>
            </li>
          </div>
          <div className="footer__image">
            <img src={coffeeBeansBlack} alt="Coffe beans" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

// HeaderTest.jsx
import React from "react";
import "./Header.scss";
import NavBar from "../nav-bar/NavBar";
import coffeeBeansFilled from "../../assets/icons/coffee-beans-filled.png";

const Header = ({ type, subtitle }) => {
  const titles = {
    mainHeader: {
      title: "Everything You Love About Coffee",
      image: true,
      subtitle: [
        { text: "We make every day full of energy and taste" },
        { text: "Want to try our beans?" },
      ],
      buttonLabel: "More",
    },
    headerCoffee: {
      title: "Our Coffee",
      image: false,
    },
    headerPleasure: {
      title: "For your pleasure",
      image: false,
    },
  };

  const {
    title,
    image,
    subtitle: subtitleData,
    buttonLabel,
  } = titles[type] || titles.mainHeader;

  let className = "header";
  if (type === "headerCoffee") {
    className += " coffee";
  }
  if (type === "headerPleasure") {
    className += " pleasure";
  }

  return (
    <header className={className}>
      <div className="container">
        <NavBar />
        <div className="header__container">
          <h1 className="header__title fz_40">{title}</h1>
          {image && (
            <div className="header__image">
              <img src={coffeeBeansFilled} alt="Coffee beans" />
            </div>
          )}
          {subtitleData && (
            <div className="header__subtitle">
              {subtitleData.map((item, index) => (
                <p key={index} className="header__subtitle-item fz_24">
                  {item.text}
                </p>
              ))}
            </div>
          )}
          {buttonLabel && (
            <button className="header__button fz_12">{buttonLabel}</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

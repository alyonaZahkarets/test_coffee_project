import coffeeBeansBlack from "../../assets/icons/coffee-beans-black.png";
import "./AboutItem.scss";

const AboutItem = (props) => {
  const { title, description1, description2 } = props;
  return (
    <>
      <li className="about-us-list__item">
        <h3 className="about-us-list__item-title fz_24">{title}</h3>
        <div className="about-us-list__item-image">
          <img src={coffeeBeansBlack} alt="Coffe beans" />
        </div>
        <div className="about-us-list__item-content">
          <div className="about-us-list__item-content-text">
            <p className="about-us-list__item-description fz_14">
              {description1}
            </p>
            <p className="about-us-list__item-description fz_14">
              {description2}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default AboutItem;

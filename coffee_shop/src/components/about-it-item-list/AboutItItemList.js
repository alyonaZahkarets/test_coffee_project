import "./AboutItItemList.scss";
import AboutUs from "../about-us/AboutUs";

const AboutItItemList = (props) => {
  const { img, country, description, price } = props;
  //   const filterValue = "thirdAbout";
  return (
    <li className="about-it-list-item">
      <div className="about-it-list-item__img">
        <img src={img} alt="Coffee" />
      </div>
      <div className="about-it-list-item__content">
        <div className="about-it-list-item__content-title">
          <AboutUs />
        </div>
        <div className="about-it-list-item__content-text">
          <p className="about-it-list-item__content-text-country">
            <span>Country: </span>
            {country}
          </p>

          <p className="about-it-list-item__content-text-description fz_14">
            <span>Description: </span>
            {description}
          </p>

          <p className="about-it-list-item__content-text-price">
            <span className="price">Price: </span>
            {price}$
          </p>
        </div>
      </div>
    </li>
  );
};

export default AboutItItemList;

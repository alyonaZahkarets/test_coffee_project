// import Header from "../../components/header/Header";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AboutUs from "../../components/about-us/AboutUs";
import "../../components/about-us/AboutUs";
import CoffeeItem from "../../components/coffee-item/CoffeeItem";

import aboutImg from "../../assets/images/pages-images/about-our-beans.jpg";

const CoffeePage = () => {
  const filterValue = "secondAbout";
  return (
    <div className="cofffee-page">
      <Header type="headerCoffee" />
      <div className="page__about-section container">
        <div className="page__about-section-content">
          <AboutUs filter={filterValue} />
        </div>
        <div className="page__about-section-image">
          <img src={aboutImg} alt="About us" />
        </div>
      </div>
      <CoffeeItem />
      <Footer />
    </div>
  );
};

export default CoffeePage;

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AboutUs from "../../components/about-us/AboutUs";
import GoodsItem from "../../components/goods-item/GoodsItem";
import aboutImg from "../../assets/images/pages-images/about-goods.png";

const GoodsPage = () => {
  const filterValue = "thirdAbout";
  return (
    <div className="goods-page">
      <Header type="headerPleasure" />
      <div className="page__about-section container">
        <div className="page__about-section-content">
          <AboutUs filter={filterValue} />
        </div>
        <div className="page__about-section-image">
          <img src={aboutImg} alt="About us" />
        </div>
      </div>
      <GoodsItem />
      <Footer />
    </div>
  );
};

export default GoodsPage;

// import Header from "../../components/header/Header";
import Header from "../../components/header/Header";
import AboutUs from "../../components/about-us/AboutUs";
import OurBest from "../../components/our-best-section/OurBest";
import Footer from "../../components/footer/Footer";

const MainPage = () => {
  const filterValue = "firstAbout";
  return (
    <div className="">
      <Header type="mainHeader" />
      <AboutUs filter={filterValue} />
      <OurBest />
      <Footer />
    </div>
  );
};

export default MainPage;

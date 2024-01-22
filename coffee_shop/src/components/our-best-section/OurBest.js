import Cards from "../cards/Cards";
import "./OurBest.scss";

const OurBest = () => {
  return (
    <div className="our-best">
      <div className="container">
        <h1 className="our-best__title fz_24">Our Best</h1>
        <div className="our-best-content">
          <Cards displayMode="firstThree" />
        </div>
      </div>
    </div>
  );
};

export default OurBest;

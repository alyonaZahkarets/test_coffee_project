import Cards from "../cards/Cards";
// import "./OurBest.scss";
import "./CoffeeItem.scss";

const CoffeeItem = () => {
  return (
    <div className="coffee-item">
      <div className="container">
        <div className="coffee-item__content">
          <Cards displayMode="all" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeItem;

import Cards from "../cards/Cards";
import "./GoodsItem.scss";

const GoodsItem = () => {
  return (
    <div className="goods-item">
      <div className="container">
        <div className="goods-item__content">
          <Cards displayMode="excludeFirstThree" />
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;

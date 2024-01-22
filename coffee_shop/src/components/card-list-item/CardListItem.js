import "./CardListItem.scss";

const CardListItem = (props) => {
  const { img, name, country, price } = props;
  return (
    <li className="card-list-item our-best-item">
      <div className="card-list-item__img">
        <img src={img} alt="Coffee" />
      </div>
      <div className="card-list-item__content">
        <h3 className="card-list-item__content-title fz_14">{name}</h3>

        <p className="card-list-item__content-description">{country}</p>

        <p className="card-list-item__content-price">{price}$</p>
      </div>
    </li>
  );
};

export default CardListItem;

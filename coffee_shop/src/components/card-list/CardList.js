// Зміни в CardList.js
import "./CardList.scss";
import CardListItem from "../card-list-item/CardListItem";

const CardList = ({ cardsData, displayMode }) => {
  let visibleCards = [];

  if (displayMode === "firstThree") {
    visibleCards = cardsData
      .slice(0, 3)
      .map((item) => ({ ...item, country: undefined }));
  } else if (displayMode === "all") {
    visibleCards = cardsData;
  } else if (displayMode === "excludeFirstThree") {
    visibleCards = cardsData.slice(3);
  }

  const cards = visibleCards.map((item) => {
    const { id, ...itemProps } = item;
    return <CardListItem key={id} {...itemProps} />;
  });

  return <ul className="cards-list">{cards}</ul>;
};

export default CardList;

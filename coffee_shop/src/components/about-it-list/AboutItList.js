// Зміни в CardList.js
// import CardListItem from "../card-list-item/CardListItem";
import AboutItItemList from "../about-it-item-list/AboutItItemList";
import "./AboutItList.scss";

const AboutItList = ({ data }) => {
  const items = data.map((item) => {
    const { id, ...itemProps } = item;
    return <AboutItItemList key={id} {...itemProps} />;
  });

  return <ul className="about-it-list">{items}</ul>;
};

export default AboutItList;

import { Component } from "react";
import CardList from "../card-list/CardList";
import AppFilter from "../app-filter/AppFilter";
import "./Cards.scss";

import image1 from "../../assets/images/items/solimo-coffee-beans.png";
import image2 from "../../assets/images/items/presto-coffee-beans.png";
import image3 from "../../assets/images/items/aromistico-coffee.png";
import SearchPanel from "../searc-panel/SearchPanel";

class Сards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsData: [
        {
          id: 1,
          img: image1,
          name: "Solimo Coffee Beans 2 kg",
          country: "Brazil",
          price: 10.73,
        },
        {
          id: 2,
          img: image2,
          name: "Presto Coffee Beans 1 kg",
          country: "Brazil",
          price: 15.99,
        },
        {
          id: 3,
          img: image3,
          name: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: 6.99,
        },
        {
          id: 4,
          img: image3,
          name: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: 6.99,
        },
        {
          id: 5,
          img: image3,
          name: "AROMISTICO Coffee 1 kg",
          country: "Kenya",
          price: 6.99,
        },
        {
          id: 6,
          img: image3,
          name: "ROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: 6.99,
        },
        {
          id: 7,
          img: image3,
          name: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: 6.99,
        },
        {
          id: 8,
          img: image3,
          name: "AROMISTICO Coffee 1 kg",
          country: "Columbia",
          price: 6.99,
        },
        {
          id: 9,
          img: image3,
          name: "AROMISTICO Coffee 1 kg",
          country: "Brazil",
          price: 6.99,
        },
      ],
      filter: "all",
      term: "",
    };
  }

  searchCard = (items, term) => {
    const lowerCaseTerm = term.toLowerCase();

    return term.length === 0
      ? items
      : items.filter((item) =>
          item.name.toLowerCase().startsWith(lowerCaseTerm)
        );
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    const lowerCaseFilter = filter.toLowerCase();

    if (filter === "brazil" || filter === "kenya" || filter === "columbia") {
      return items.filter(
        (item) => item.country.toLowerCase() === lowerCaseFilter
      );
    } else {
      return items;
    }
  };

  onFilterSelectItem = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { filter, term, cardsData } = this.state;
    let visibleData = this.filterPost(this.searchCard(cardsData, term), filter);

    const { displayMode } = this.props;

    return (
      <div className="cards">
        <div className="filter-panel none">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            filter={filter}
            onFilterSelectItem={this.onFilterSelectItem}
          />
        </div>
        <CardList cardsData={visibleData} displayMode={displayMode} />
      </div>
    );
  }
}

export default Сards;

// getFilteredCards = () => {
//   const { cardsData } = this.state;
//   const { filter } = this.props;

//   let filteredData;

//   if (filter === "firstThree") {
//     filteredData = cardsData.slice(0, 3);
//   } else if (filter === "sixCards") {
//     filteredData = cardsData.slice(3, 10);
//   } else if (filter === "brasil") {
//     filteredData = cardsData.filter((item) => item.country === "Brazil");
//   } else if (filter === "kenya") {
//     filteredData = cardsData.filter((item) => item.country === "Kenya");
//   } else if (filter === "columbia") {
//     filteredData = cardsData.filter((item) => item.country === "Columbia");
//   } else {
//     filteredData = cardsData;
//   }

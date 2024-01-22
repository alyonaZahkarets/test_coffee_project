import { Component } from "react";
import "./SearchPanel.scss";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <div className="search-panel">
        <p className="search-panel__title fz_14">Lookiing for</p>
        <input
          type="text"
          className="form-control search-input"
          placeholder="start typing here..."
          value={this.state.term}
          onChange={this.onUpdateSearch}
        />
      </div>
    );
  }
}

export default SearchPanel;

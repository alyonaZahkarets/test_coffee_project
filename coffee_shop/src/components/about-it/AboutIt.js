import { Component } from "react";
import AboutItList from "../about-it-list/AboutItList";
import "./AboutIt.scss";

import image1 from "../../assets/images/pages-images/about-goods-item.png";

class AboutIt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          img: image1,
          country: "Brazil",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          price: 10.73,
        },
        {
          id: 2,
          img: image1,
          country: "Brazil",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          price: 15.99,
        },
      ],
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="about-it">
        <AboutItList data={data} />
      </div>
    );
  }
}

export default AboutIt;

import AboutItem from "../../components/about-item/AboutItem";
import "./AboutUs.scss";

///here is About section for three pages
const AboutUs = ({ filter }) => {
  const data = [
    {
      id: "1",
      title: "About Us",
      description1:
        "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
      description2:
        "Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.",
    },
    {
      id: "2",
      title: "About our beans",
      description1:
        "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.",
      description2:
        "Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
    },
    {
      id: "3",
      title: "About our goods",
      description1:
        "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.",
      description2:
        "Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
    },
    {
      id: "4",
      title: "About It",
      description1: "",
      description2: "",
    },
  ];

  const getFilteredAbout = () => {
    let filteredData;

    if (filter === "firstAbout") {
      filteredData = data.slice(0, 1);
    } else if (filter === "secondAbout") {
      filteredData = data.slice(1, 2);
    } else if (filter === "thirdAbout") {
      filteredData = data.slice(2, 3);
    } else {
      filteredData = data.slice(3, 4);
    }

    return filteredData;
  };

  const aboutDataElements = getFilteredAbout().map((item) => {
    const { id, ...itemProps } = item;
    return <AboutItem key={id} {...itemProps} />;
  });

  return (
    <div className="">
      <ul className="about-us-list about-it">{aboutDataElements}</ul>
    </div>
  );
};

export default AboutUs;

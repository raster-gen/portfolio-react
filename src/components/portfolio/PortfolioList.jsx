import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioListCss from "./PortfolioList.module.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const PortfolioList = () => {
  const portfolioList = [
    {
      id: 1,
      githubLink: "https://github.com/raster-gen/html-css-responsive-webpage",
      lifeDemoLink: "https://raster-gen.github.io/html-css-responsive-webpage/",
      portfolioImage: { IMG1 },
    },
    {
      id: 2,
      githubLink: "https://github.com/raster-gen/html-css-responsive-webpage",
      lifeDemoLink: "https://raster-gen.github.io/html-css-responsive-webpage/",
      portfolioImage: { IMG2 },
    },
    {
      id: 3,
      githubLink: "https://github.com/raster-gen/html-css-responsive-webpage",
      lifeDemoLink: "https://raster-gen.github.io/html-css-responsive-webpage/",
      portfolioImage: { IMG3 },
    },
    {
      id: 4,
      githubLink: "https://github.com/raster-gen/html-css-responsive-webpage",
      lifeDemoLink: "https://raster-gen.github.io/html-css-responsive-webpage/",
      portfolioImage: { IMG4 },
    },
    {
      id: 5,
      githubLink: "https://github.com/raster-gen/html-css-responsive-webpage",
      lifeDemoLink: "https://raster-gen.github.io/html-css-responsive-webpage/",
      portfolioImage: { IMG5 },
    },
    {
      id: 6,
      githubLink: "https://github.com/raster-gen/html-css-responsive-webpage",
      lifeDemoLink: "https://raster-gen.github.io/html-css-responsive-webpage/",
      portfolioImage: { IMG6 },
    },
  ];

  return (
    <div
      className={[portfolioListCss.portfolio__container, "container"].join(" ")}
    >
      {portfolioList.map((listItem, index) => {
        return <PortfolioItem portfolio={listItem} key={index} />;
      })}
    </div>
  );
};

export default PortfolioList;

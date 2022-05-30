import React from "react";
import portfolioItemCss from "./PortfolioItem.module.css";

const PortfolioItem = ({ portfolio }) => {
  const image = Object.values(portfolio.portfolioImage);
  return (
    <article className={portfolioItemCss.portfolio__item}>
      <div className={portfolioItemCss.portfolio__image}>
        <img src={image} alt="portfolio one" />
      </div>
      <h3 className={portfolioItemCss.portfolio__title}>Portfolio title</h3>
      <div className={portfolioItemCss.portfolio__cta}>
        <a
          href={portfolio.githubLink}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Github
        </a>
        <a
          href={portfolio.lifeDemoLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioItem;

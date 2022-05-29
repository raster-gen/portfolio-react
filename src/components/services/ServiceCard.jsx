import React from "react";
import { BiCheck } from "react-icons/bi";
import cardCss from "./ServiceCard.module.css";

const ServiceCard = ({ list, title }) => {
  return (
    <article className={cardCss.service}>
      <div className={cardCss.service__head}>
        <h3>{title}</h3>
      </div>

      <ul className={cardCss.service__list}>
        {list.map((listItem, index) => {
          return (
            <li className={cardCss.service__list_item} key={index}>
              <BiCheck className={cardCss.service__list_icon} />
              <p className={cardCss.service__list_content}>{listItem}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ServiceCard;

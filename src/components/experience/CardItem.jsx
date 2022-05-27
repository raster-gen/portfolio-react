import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import cls from "./CardItem.module.css";

const CardItem = ({ children, list }) => {
  return (
    <div className={cls.card__container}>
      <h3 className={cls.card__header}>{children}</h3>
      <div className={cls.card__content}>
        {list.map((item) => {
          return (
            <article key={item.id} className={cls.card__content_details}>
              <BsPatchCheckFill className={cls.card__icon} />
              <div>
                <h4>{item.name}</h4>
                <small className="text-light">{item.description}</small>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default CardItem;

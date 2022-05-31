import React from "react";
import TItemCss from "./TItem.module.css";

const TestimonialItem = ({ name, review, avatar }) => {
  return (
    <article className={TItemCss.testimonial}>
      <div className={TItemCss.client__avatar}>
        <img src={avatar} alt="Client one" />
      </div>
      <h5 className={TItemCss.client__name}>{name}</h5>
      <small className={TItemCss.client__review}>{review}</small>
    </article>
  );
};

export default TestimonialItem;

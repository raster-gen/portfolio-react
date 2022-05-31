import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import TestimonialItem from "./TestimonialItem";
import TListCss from "./TList.module.css";

const TestimonialsList = () => {
  const testimonialsList = [
    {
      id: 1,
      clientName: "Tina Snow",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iusto temporibus repellendus sit tempora nemo recusandae hic culpa impedit doloribus ipsa reprehenderit, id unde, adipisci necessitatibus quisquam odit accusamus quas.",
      clientAvatar: AVTR1,
    },
    {
      id: 2,
      clientName: "Ernest Archiver",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iusto temporibus repellendus sit tempora nemo recusandae hic culpa impedit doloribus ipsa reprehenderit, id unde, adipisci necessitatibus quisquam odit accusamus quas.",
      clientAvatar: AVTR2,
    },
    {
      id: 3,
      clientName: "Kwame Dispite",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iusto temporibus repellendus sit tempora nemo recusandae hic culpa impedit doloribus ipsa reprehenderit, id unde, adipisci necessitatibus quisquam odit accusamus quas.",
      clientAvatar: AVTR3,
    },
    {
      id: 4,
      clientName: "Nana Ama",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iusto temporibus repellendus sit tempora nemo recusandae hic culpa impedit doloribus ipsa reprehenderit, id unde, adipisci necessitatibus quisquam odit accusamus quas.",
      clientAvatar: AVTR4,
    },
  ];

  return (
    <div className={[TListCss.testimonial__container, "container"].join(" ")}>
      {testimonialsList.map(
        ({ id, clientName, clientReview, clientAvatar }) => {
          return (
            <TestimonialItem
              name={clientName}
              review={clientReview}
              avatar={clientAvatar}
              key={id}
            />
          );
        }
      )}
    </div>
  );
};

export default TestimonialsList;

import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import TestimonialItem from "./TestimonialItem";
import TListCss from "./TList.module.css";

// Swiper
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const TestimonialsList = () => {
  const testimonialsList = [
    {
      clientName: "Tina Snow",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iusto temporibus repellendus sit tempora nemo recusandae hic culpa impedit doloribus ipsa reprehenderit, id unde, adipisci necessitatibus quisquam odit accusamus quas.",
      clientAvatar: AVTR1,
    },
    {
      clientName: "Ernest Archiver",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iusto temporibus repellendus sit tempora nemo recusandae hic culpa impedit doloribus ipsa reprehenderit, id unde, adipisci necessitatibus quisquam odit accusamus quas.",
      clientAvatar: AVTR2,
    },
    {
      clientName: "Kwame Dispite",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iusto temporibus repellendus sit tempora nemo recusandae hic culpa impedit doloribus ipsa reprehenderit, id unde, adipisci necessitatibus quisquam odit accusamus quas.",
      clientAvatar: AVTR3,
    },
    {
      clientName: "Nana Ama",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, iusto temporibus repellendus sit tempora nemo recusandae hic culpa impedit doloribus ipsa reprehenderit, id unde, adipisci necessitatibus quisquam odit accusamus quas.",
      clientAvatar: AVTR4,
    },
  ];

  return (
    <Swiper
      className={[TListCss.testimonial__container, "container"].join(" ")}
      style={{ paddingBottom: "4rem" }}
      modules={[Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={true}
    >
      {testimonialsList.map(
        ({ clientName, clientReview, clientAvatar }, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialItem
                name={clientName}
                review={clientReview}
                avatar={clientAvatar}
              />
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};

export default TestimonialsList;

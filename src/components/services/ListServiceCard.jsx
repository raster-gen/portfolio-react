import React from "react";
import ServiceCard from "./ServiceCard";
import listSrv from "./ListServiceCard.module.css";

const ListServiceCard = ({ services }) => {
  return (
    <div className={[listSrv.services__container, "container"].join(" ")}>
      {services.map((service, index) => {
        return (
          <ServiceCard
            title={service.cardTitle}
            list={service.cardList}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ListServiceCard;

import React from "react";
import CardItem from "./CardItem";
import "./experience.css";

export default function Experience() {
  // levels of experience
  const levels = {
    zero: "basic",
    first: "Intermediate",
    second: "Experiensed",
  };
  // the list of knowledges for frontend
  const frontList = [
    { name: "HTML", description: levels.second, id: 1 },
    { name: "CSS", description: levels.second, id: 2 },
    { name: "Javascript", description: levels.first, id: 3 },
    { name: "Tailwind", description: levels.zero, id: 4 },
    { name: "React", description: levels.first, id: 5 },
  ];
  // the list of knowledges for backend
  const backList = [
    { name: "Node JS", description: levels.zero, id: 1 },
    { name: "MySQL", description: levels.first, id: 2 },
    { name: "PostgreSQL", description: levels.first, id: 3 },
    { name: "GraphQL", description: levels.zero, id: 4 },
  ];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <CardItem list={frontList}>Frontend Development</CardItem>
        <CardItem list={backList}>Backend Development</CardItem>
      </div>
    </section>
  );
}

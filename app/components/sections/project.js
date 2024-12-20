import React from "react";
import Section from "../ui/section";
import Card from "../ui/card";
import { projectItems } from "@/app/constant/data";
const Project = () => {
  return (
    <Section id={"projects"}>
      <h2 className="sectionHeading">Projects</h2>

      <div className="card-container-grid">
        {projectItems.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Project;

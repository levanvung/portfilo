import { Col, Row } from "react-bootstrap";
import ProjectCard from "./project.card";
import React from "react";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();
  const projects = t("projected.projects", { returnObjects: true });

  if (!Array.isArray(projects)) {
    console.error("Dữ liệu projects không phải là một mảng:", projects);
    return null;
  }
  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">
            <span className="brand-red">{t("project.header")}</span>
          </h3>
          <h6 className="text-center mb-md-5 mb-2">{t("project.body")}</h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {projects.map((item: any, index: number) => (
          <Col md={4} className="project-card" key={index}>
            <ProjectCard
              imgPath={item.imgPath || ""}
              title={item.title}
              description={item.description}
              githubLink={item.githubLink || ""}
              demoLink={item.demoLink || ""}
            />
          </Col>
        ))}
      </Row>
      <div className="mb-7"></div>
    </>
  );
};

export default Project;

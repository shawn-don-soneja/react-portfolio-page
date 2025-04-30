import React, { useEffect, useRef, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const jumbotronRef = useRef(null); // this replaces skillsTabRef
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const element = jumbotronRef.current;
    if (!element || isScrolled) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsScrolled(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0 }
    );
  
    observer.observe(element);
  
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [isScrolled]);
  

  return (
    <Jumbotron ref={jumbotronRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={jumbotronRef} className="display-4 pb-5 text-center">{heading}</h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Functional Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;

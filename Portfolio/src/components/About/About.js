import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        <h1 className="project-heading">Education</h1>
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: "20px", paddingBottom: "50px" }}
        >
          <Col xs={6} md={6} className="education">
            <i>
              <b className="purple">2020-2023</b>
            </i>
            <p>
              Bachelor of Science in Computer Science <br />
              The Gandhigram Rural Institute-Deemed to be University , Dindigul
            </p>
          </Col>
        </div>
        <h1 className="project-heading">Experience</h1>
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: "20px", paddingBottom: "50px" }}
        >
          <Col xs={6} md={6} className="education">
            <i>
              <b className="purple">2023-Present</b>
            </i>
            <p>
              <i>
                <b className="">Software Engineer</b>
              </i>{" "}
              <br />
              Frontend Developer at Data Aces
              <br /> Chennai
            </p>
          </Col>
        </div>
      </Container>
    </Container>
  );
}

export default About;

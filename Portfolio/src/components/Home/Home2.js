import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/img.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello👋🏻, {" "}I'm Arunkumar, a passionate{" "}
              <i>
                <b className="purple"> frontend developer </b>
              </i>{" "}
              specializing in React.js, with expertise in end-to-end{" "}
              <i>
                <b className="purple"> UI automation testing.</b>
              </i>
              <br />
              <br />
              I excel atbuilding modern, responsive, and user-friendly web
              interfaces, whileensuring seamless functionality through
              comprehensive testing.
              <br />
              <br />
              Myfocus is on delivering scalable applications that provide
              exceptionaluser experiences and maintain high standards of
              quality.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ width: "225px", height: "250px", borderRadius: "50%" }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

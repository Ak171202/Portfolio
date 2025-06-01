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
              Hello 👋🏻, I'm <b className="purple">Arunkumar</b>, a passionate{" "}
              <i>
                <b className="purple">Frontend Developer</b>
              </i>{" "}
              specializing in <b className="purple">React.js</b> with a strong
              focus on{" "}
              <i>
                <b className="purple">end-to-end UI automation testing</b>
              </i>
              .
              <br />
              <br />I craft modern, responsive, and user-centric web interfaces
              with an emphasis on{" "}
              <b className="purple">performance, scalability</b>, and{" "}
              <b className="purple">usability</b>. With a solid understanding of
              front-end technologies and testing frameworks, I ensure seamless
              functionality through{" "}
              <b className="purple">robust automation practices</b>.
              <br />
              <br />
              I'm driven by a commitment to <b className="purple">clean code</b>
              , <b className="purple">efficient development</b>, and delivering{" "}
              <b className="purple">high-quality applications</b> that elevate
              the overall user experience.
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

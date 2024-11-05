import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiGit,
  DiCss3,
} from "react-icons/di";
import { VscBeaker } from "react-icons/vsc";
import { MdOutlineViewQuilt } from "react-icons/md";
import { BsBootstrap } from 'react-icons/bs';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML">
        <DiHtml5  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <DiCss3  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <BsBootstrap  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1  />
      </Col>
      <Col xs={4} md={2} className="tech-icons"  title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Playwright" >
        <VscBeaker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git" >
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Wireframe">
        <MdOutlineViewQuilt />
      </Col>
    </Row>
  );
}

export default Techstack;

import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiGit,
  DiCss3,
  DiFirebase,
} from "react-icons/di";
import { SiRedux, SiTailwindcss, SiJest } from "react-icons/si";
import { VscBeaker } from "react-icons/vsc";
import { MdOutlineViewQuilt } from "react-icons/md";
import { BsBootstrap } from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        { icon: <DiHtml5 />, label: "HTML" },
        { icon: <DiCss3 />, label: "CSS" },
        { icon: <BsBootstrap />, label: "Bootstrap" },
        { icon: <DiJavascript1 />, label: "JavaScript" },
        { icon: <DiReact />, label: "React" },
        { icon: <SiRedux />, label: "Redux" },
        { icon: <SiTailwindcss />, label: "Tailwind CSS" },
        { icon: <SiJest />, label: "Jest" },
        { icon: <DiFirebase />, label: "Firebase" },
        { icon: <VscBeaker />, label: "Playwright" },
        { icon: <DiGit />, label: "Git" },
        { icon: <MdOutlineViewQuilt />, label: "Wireframe" },
      ].map((tech, idx) => (
        <Col key={idx} xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="top"
            // delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip style={{ backgroundColor: "white", color: "white" ,padding:"2px",borderRadius:"2px"}} id={`tooltip-${idx}`}>{tech.label}</Tooltip>}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

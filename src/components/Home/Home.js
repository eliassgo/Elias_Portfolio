import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from "../Projects/Projects";
import About from "../About/About";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content" style={{textAlign: "center" }}>
          <Row>
            <Col className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ELIAS GOMES </strong>
              </h1>

              <div style={{paddingTop: "40px"}}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Projects/>
      <About/>
    </section>
  );
}

export default Home;

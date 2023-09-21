import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Breve <span className="blue"> Apresentação </span> 
            </h1>
            <p className="home-about-body">
            Sou um entusiasta da 
            <i>
                <b className="blue"> programação  </b>
              </i>
            em busca de explorar as 
            <i>
                <b className="blue">  tecnologias  </b>
              </i>
           que moldam nosso mundo digital. 
            Possuo muita paixão pelo vasto universo cósmico, estrelas e pela complexidade da mente humana, e expresso essas paixões por meio do meu trabalho.
              <br />
              <br />Tenho experiência em diversas tecnologias,
              <i>
                <b className="blue"> incluindo JavaScript, React.js e TypeScript. </b>
              </i>
              <br />
              <br />
              Atualmente, estou focado no  
              <i>
                <b className="blue"> desenvolvimento web, </b> aprimorando constantemente minhas habilidades nesta área em constante evolução.
              </i>
              <br />
              <br />
              Em meus projetos, faço uso de uma variedade de ferramentas,<b className="blue"> como Bootstrap, jQuery, Grunt e SASS.
</b>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONEXÕES</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/eliassgo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eliass-gomes/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/eliass.go"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

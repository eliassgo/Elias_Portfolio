import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Olá, eu sou <span className="blue">Elias Gomes, </span>
          natural do <span className="blue">  Maranhão, Brasil.</span>
            <br /> Atualmente, estou cursando Engenharia de Software como parte da minha graduação, e estou me aprofundando no mundo do desenvolvimento full stack.
            <br />
            Meu foco principal envolve o estudo constante e a execução de diversos projetos para aprimorar minhas habilidades. 
            <br />
            <br />
            Além disso, tenho dedicado parte do meu tempo ao estudo da ciência de dados utilizando Python, uma jornada que tem sido incrivelmente empolgante.
            <br />
            <br />
            Fora do mundo acadêmico e profissional, tenho uma paixão por:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Explorar os mistérios do universo.
            </li>
            <li className="about-activity">
              <ImPointRight /> Cuidar da minha saúde física e mental.
            </li>
            <li className="about-activity">
              <ImPointRight /> Abraçar diferentes perspectivas e aprender com elas.
            </li>
          </ul>

          <p style={{ color: "#070A52" }}>
            "Se você não tiver talento para explorar seu talento, nunca chegará ao auge do seu potencial"{" "}
          </p>
          <footer className="blockquote-footer">François Ducasse
</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

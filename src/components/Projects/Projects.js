import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import ProjectCard from "./ProjectCards";
import calc_vue from "../../Assets/Projects/calc_vue.png";
import casa_verde from "../../Assets/Projects/casa_verde.png";
import clone_disney from "../../Assets/Projects/clone_disney.png";
import contatos from "../../Assets/Projects/contatos.png";
import github_user from "../../Assets/Projects/github_user.png";
import global_solution from "../../Assets/Projects/global_solution.png";
import interestellar from "../../Assets/Projects/interestellar.png";
import schneider from "../../Assets/Projects/schneider.png";
import todo_list from "../../Assets/Projects/todo_list.png";
import efood from "../../Assets/Projects/efood.png";
import eplay from "../../Assets/Projects/eplay.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          <strong className="blue"> Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Explore os projetos que desenvolvi durante minha jornada acadêmica, cursos livres e iniciativas pessoais.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eplay} title="E-commer de Jogos Online - Eplay"
              isBlog={false}
              description="
              E-commerce de compra de jogos online, desenvolvido em React
               com Typescript e estilização com Styled Component.
              React Router para navegação entre as páginas, Integração de API para receber dados dinâmicos, gerenciamento da integração com Redux
              Gerenciamento global dados com Redux
              Yup e Formik para validação de formulários
              "
              ghLink="https://github.com/eliassgo/loja_virtual_eplay.git"
              demoLink="https://eplay-shop.vercel.app/"              
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={efood} title="E-commer de Comida - Efood"
              isBlog={false}
              description="E-commerce de compra de comida online, página de apresentação, cardápio e checkout.
              Código desenvolvido em React com Typescript e estilização com Styled Component.  
              React Router para navegação entre as páginas, Integração de API para receber dados dinâmicos, gerenciamento da integração com Redux,
           Gerenciamento global dados com Redux "
              ghLink="https://github.com/eliassgo/e-commerce_efood.git"
              demoLink="https://e-commerce-efood.vercel.app/"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={global_solution} title="Global Solution - Combate à fome mundial e à escassez de alimentos"
              isBlog={false}
              description="Como membro de uma equipe de três alunos, contribuí para o projeto SACS - Agricultura Compartilhada Sustentável, com o objetivo de enfrentar a fome por meio da inovação. Criamos uma plataforma web dinâmica que aborda a questão da fome, apresentando nossa estratégia e utilizando HTML5, CSS3 e JavaScript, além do framework Tailwind para a estética. Fui fundamental na criação da seção de agricultura sustentável, desempenhando papel essencial na concepção da ideia e no texto pitch. Nossa colaboração abrangeu todas as fases, desde o conceito até a implementação da plataforma, incluindo a produção de vídeo."
              ghLink="https://github.com/eliassgo/global-solution.git"
              demoLink="https://youtu.be/SGwgFb8-Zng?si=u1MnDZKwE4voY3dC"              
            />
          </Col>
          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={clone_disney}
                title="Projeto Calculadora de IMC com ReactJs"
                isBlog={false}
                description="Com os dados fornecidos pelo usuário, coletamos os valores de altura e peso e os enviamos para as respectivas constantes. Em seguida, utilizamos a função useState para atualizá-los automaticamente. Realizamos uma verificação do tipo de dado e, então, acionamos a função calculaIMC para retornar o IMC, classificação, Grau de obesidade e, ainda, alterar a cor correspondente à faixa de IMC em que o usuário se encontra na tabela geral."
                ghLink="https://github.com/eliassgo/calculadora_de_imc.git"
                demoLink="https://calculadora-de-imc-khaki.vercel.app/"
              />
           </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schneider} title="Challenge Scheneider Eletric"
              isBlog={false}
              description="Participação destacada em parceria com a Schneider Electric na criação de uma plataforma inovadora de conscientização sustentável para os colaboradores. Junto a uma equipe de 4 estudantes, concebendo e implementando plataforma interativa com feed, quiz e notícias. Contribuição significativa na construção do overview utilizando HTML, CSS3 e Bootstrap, bem como na concepção da ideia e texto do vídeo pitch. Experiência colaborativa com foco em tecnologias-chave como HTML5, CSS3 e JavaScript."
              ghLink="https://github.com/eliassgo/challengeschneider.git"
              demoLink="https://youtu.be/weHnUwrBtYo?si=lOs6Q4v7B94J13Ps"
            />
          </Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={github_user}
    title="Movie Page e interetividade com JS"
    isBlog={false}
    description="Este projeto é uma Landing Page do filme Interestellar. A página apresenta um banner com a imagem do filme, a sinopse, um componente interativo feito em JavaScript para mostrar os trailers, elenco e galeria de fotos. A página foi criada utilizando HTML, SCSS e JavaScript."
    ghLink="https://github.com/eliassgo/movie_page.git"
    demoLink="https://lista-contatos-ten.vercel.app/"
  />
</Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo_list} title="Lista de Tarefas com React.Js e React Router"
              isBlog={false}
              description=""
              ghLink="https://github.com/eliassgo/Todo_List.git"
            />
          </Col>

          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={calc_vue}
    title="Calculadora Vue"
    isBlog={false}
    description="Calculadora Aritmética com Vue. Os números escritos nos campos de input são coletados e inseridos em um array de objetos com estado reativo. Ao selecionar a operação desejada no campo de seleção, uma arrow function para realizar a operação é acionada, permitindo que o cálculo seja realizado automaticamente, sem a necessidade de apertar qualquer botão."
    ghLink="https://github.com/eliassgo/calculadora_vuejs.git"
    demoLink="https://calculadora-vuejs-woad.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
<ProjectCard
  imgPath={contatos}
  title="Contatos"
  isBlog={false}
  description="Agenda de contatos feita com o Framework React com Typescript. Utilizando também React Router."
  ghLink="https://github.com/eliassgo/Lista_Contatos.git"
  demoLink="https://lista-contatos-ten.vercel.app/"
/>
</Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={casa_verde} title="Casa Verde"
            isBlog={false}
            description="Projeto desenvolvido durante a Imersão Front-End Alura. É uma página Web de uma loja de produtos para casa, foi desenvolvido com base em um protótipo do figma."
            ghLink="https://github.com/eliassgo/casa_verde.git"
            
          />
        </Col>

        <Col md={4} className="project-card">
<ProjectCard
  imgPath={interestellar}
  title="Projeto GitHub Perfil com React"
  isBlog={false}
  description="Este projeto consiste em uma aplicação web que busca os repositórios de um usuário do GitHub e exibe o perfil e a lista de repositórios encontrados. O projeto utiliza React como biblioteca para a construção da interface do usuário."
  ghLink="https://github.com/eliassgo/github_perfil.git"
  demoLink="https://github-perfil-eli.vercel.app/"
/>
</Col>

        </Row>
        <div className="divLink">
        <span className="divisor"></span>
        <strong className="blue"> <Link to="/projectsList"> Ver mais projetos</Link>
         </strong>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;


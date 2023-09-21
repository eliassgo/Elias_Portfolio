import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import bootstrap_avanc from "../../Assets/Projects/bootstrap_avanc.png";
import calc_imc from "../../Assets/Projects/calc_imc.png";
import ebac_talk from "../../Assets/Projects/ebac_talk.png";
import game_shop from "../../Assets/Projects/game_shop.png";
import minhas_tarefas from "../../Assets/Projects/minhas_tarefas.png";
import mochila_viagem from "../../Assets/Projects/mochila_viagem.png";
import secret_number from "../../Assets/Projects/secret_number.png";
import sorveteria from "../../Assets/Projects/sorveteria.png";
import way_books from "../../Assets/Projects/way_books.png";
import ScrollToTop from '../ScrollToTop';


const ListaDeProjetos = () => {
  return (
    <><ScrollToTop /><Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="blue"> Projetos </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minhas_tarefas}
              title="Projeto To Do com VueJs - Minhas Tarefas"
              isBlog={false}
              description="Agenda de contatos feita com o Framework React com Typescript. Utilizando também React Router."
              ghLink="https://github.com/eliassgo/Todo_Vue.git"
              demoLink="https://todo-vue-vert-nu.vercel.app/" />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc_imc} title="Disney Plus Clone: Animação com JS"
              isBlog={false}
              description="Este projeto é um clone do serviço de streaming Disney+. Ele visa replicar a interface do Disney+ e demonstrar algumas de suas principais funcionalidades. A página foi criada utilizando HTML, SCSS (que é compilado em CSS) e JavaScript.O código JavaScript é usado para adicionar interatividade ao projeto. Ele inclui funcionalidades como alternar abas, mostrar/ocultar elementos do cabeçalho com base na posição de rolagem da página e criar acordeões para as perguntas frequentes."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/" />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebac_talk}
              title="Birthday Landing Page com JavaScript e Animate On Scroll"
              isBlog={false}
              description="Este projeto é uma Landing Page para celebrar um aniversário. A página apresenta um contador regressivo que mostra quanto tempo falta para o evento começar. A página foi criada utilizando HTML, SCSS (que é compilado em CSS) e JavaScript, e faz uso da biblioteca AOS (Animate On Scroll) para adicionar efeitos de fade (desvanecer) aos componentes da página conforme o usuário faz o scroll."
              ghLink="https://github.com/eliassgo/birthday_landingPage.git"
              demoLink="https://birthday-landing-page-ashen.vercel.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game_shop}
              title="Página de projetos"
              isBlog={false}
              description="Esse projeto é um exercício para treinar responsividade usando o framework Bootstrap. Ele consiste em uma página HTML com diversos elementos, como um carousel de imagens, um layout de grid responsivo para exibir cards em diferentes dispositivos e uma seção de informações pessoais com links para redes sociais."
              ghLink="https://github.com/eliassgo/Bootstrap_Avan.Ebac.git"
              demoLink="https://elias-bootstrap.vercel.app/" />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mochila_viagem}
              title="JavaScript e LocalStorage: Mochila de Viagem"
              isBlog={false}
              description="Um aplicativo simples de mochila de viagem onde os usuários podem adicionar, atualizar e excluir itens da lista da mochila. Os itens são armazenados em localStorage para persistência dos dados."
              ghLink="https://github.com/eliassgo/viagem_mochila.git"
              demoLink="https://viagem-mochila.vercel.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secret_number}
              // eslint-disable-next-line no-script-url
              title="JavaScript: Jogo de Adivinhação por Voz"
              isBlog={false}
              description="Este é um projeto de um jogo em que o usuário tenta adivinhar um número utilizando sua voz. O jogo possui uma interface simples em HTML, estilizada com CSS, e utiliza JavaScript para implementar a funcionalidade de reconhecimento de voz, sorteio do número e validação dos palpites."
              ghLink="https://github.com/eliassgo/secret_number.git"
              demoLink="https://secret-number-smoky.vercel.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sorveteria}
              title="Landing Page com Bootstrap"
              isBlog={false}
              description="Essa é uma Landing Page de uma loja de sorvetes chamada Sorveteria Sky. O código faz uso de Bootstrap (versão 5.3.0-alpha3) para aplicar estilos à página. Em geral, essa Landing Page é projetada para apresentar a sorveteria de forma atraente e informativa. Ela utiliza recursos visuais, como imagens e carrossel, para chamar a atenção dos visitantes. O design responsivo permite que a página se adapte a diferentes tamanhos de tela, tornando-a adequada para visualização em dispositivos móveis e computadores."
              ghLink="https://github.com/eliassgo/projeto_bootstrap.git"
              demoLink="https://projeto-bootstrap-lemon.vercel.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={way_books}
              title="Way Books"
              isBlog={false}
              description="Esta é uma Landing Page de uma loja de livros, projetada para treinar a responsividade usando o framework Bootstrap."
              ghLink="https://github.com/eliassgo/Site_Responsivo.Ebac.git"
              demoLink="https://way-books.vercel.app/" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bootstrap_avanc}
              title="Game Shop"
              isBlog={false}
              description="Game Shop, loja de jogos, site feito em HTML e CSS, com textos, imagens e formulário."
              ghLink="https://github.com/eliassgo/Site_Game_Shop.git"
              demoLink="https://site-gamesshop-six-rust.vercel.app/" />
          </Col>

        </Row>
      </Container>
    </Container></>
  )
}

export default ListaDeProjetos
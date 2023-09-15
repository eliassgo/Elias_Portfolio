import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import birthday from "../../Assets/Projects/birthday.png"; 
import bootstrap_avanc from "../../Assets/Projects/bootstrap_avanc.png";
import calc_imc from "../../Assets/Projects/calc_imc.png";
import calc_vue from "../../Assets/Projects/calc_vue.png";
import casa_verde from "../../Assets/Projects/casa_verde.png";
import clone_disney from "../../Assets/Projects/clone_disney.png";
import contatos from "../../Assets/Projects/contatos.png";
import ebac_talk from "../../Assets/Projects/ebac_talk.png";
import game_shop from "../../Assets/Projects/game_shop.png";
import github_user from "../../Assets/Projects/github_user.png";
import global_solution from "../../Assets/Projects/global_solution.png";
import interestellar from "../../Assets/Projects/interestellar.png";
import minhas_tarefas from "../../Assets/Projects/minhas_tarefas.png";
import mochila_viagem from "../../Assets/Projects/mochila_viagem.png";
import schneider from "../../Assets/Projects/schneider.png";
import secret_number from "../../Assets/Projects/secret_number.png";
import sorveteria from "../../Assets/Projects/sorveteria.png";
import todo_list from "../../Assets/Projects/todo_list.png";
import way_books from "../../Assets/Projects/way_books.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        



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
              imgPath={schneider} title="Challenge Scheneider Eletric"
              isBlog={false}
              description="Participação destacada em parceria com a Schneider Electric na criação de uma plataforma inovadora de conscientização sustentável para os colaboradores. Junto a uma equipe de 4 estudantes, concebendo e implementando plataforma interativa com feed, quiz e notícias. Contribuição significativa na construção do overview utilizando HTML, CSS3 e Bootstrap, bem como na concepção da ideia e texto do vídeo pitch. Experiência colaborativa com foco em tecnologias-chave como HTML5, CSS3 e JavaScript."
              ghLink="https://github.com/eliassgo/challengeschneider.git"
              demoLink="https://youtu.be/weHnUwrBtYo?si=lOs6Q4v7B94J13Ps"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo_list} title="Lista de Tarefas"
              isBlog={false}
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={casa_verde} title="Casa Verde"
              isBlog={false}
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={github_user}
    title="Movie Page e interetividade com JS"
    isBlog={false}
    description="Este projeto é uma Landing Page do filme Interestellar. A página apresenta um banner com a imagem do filme, a sinopse, um componente interativo feito em JavaScript para mostrar os trailers, elenco e galeria de fotos. A página foi criada utilizando HTML, SCSS e JavaScript."
    ghLink="https://github.com/eliassgo/Lista_Contatos.git"
    demoLink="https://lista-contatos-ten.vercel.app/"
  />
</Col>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={bootstrap_avanc}
    title="Game Shop"
    isBlog={false}
    description="Game Shop, loja de jogos, site feito em HTML e CSS, com textos, imagens e formulário."
    ghLink="https://github.com/eliassgo/Site_Game_Shop.git"
    demoLink="https://site-gamesshop-six-rust.vercel.app/"
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
              imgPath={calc_imc} title="Clone Disney Plus"
              isBlog={false}
              description="Este projeto é um clone do serviço de streaming Disney+. Ele visa replicar a interface do Disney+ e demonstrar algumas de suas principais funcionalidades. A página foi criada utilizando HTML, SCSS (que é compilado em CSS) e JavaScript.O código JavaScript é usado para adicionar interatividade ao projeto. Ele inclui funcionalidades como alternar abas, mostrar/ocultar elementos do cabeçalho com base na posição de rolagem da página e criar acordeões para as perguntas frequentes."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={clone_disney}
    title="Disney Plus Clone: Animação com JS"
    isBlog={false}
    description="Este projeto é um clone do serviço de streaming Disney+. Ele visa replicar a interface do Disney+ e demonstrar algumas de suas principais funcionalidades. A página foi criada utilizando HTML, SCSS e JavaScript."
    ghLink="https://github.com/eliassgo/clone_disneyplus.git"
    demoLink="https://elias-clone-disneyplus.vercel.app/"
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
    imgPath={ebac_talk}
    title="Birthday Landing Page com JavaScript e Animate On Scroll"
    isBlog={false}
    description="Este projeto é uma Landing Page para celebrar um aniversário. A página apresenta um contador regressivo que mostra quanto tempo falta para o evento começar. A página foi criada utilizando HTML, SCSS (que é compilado em CSS) e JavaScript, e faz uso da biblioteca AOS (Animate On Scroll) para adicionar efeitos de fade (desvanecer) aos componentes da página conforme o usuário faz o scroll."
    ghLink="https://github.com/eliassgo/birthday_landingPage.git"
    demoLink="https://birthday-landing-page-ashen.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={game_shop}
    title="Game Shop"
    isBlog={false}
    description="Esse projeto é um exercício para treinar responsividade usando o framework Bootstrap. Ele consiste em uma página HTML com diversos elementos, como um carousel de imagens, um layout de grid responsivo para exibir cards em diferentes dispositivos e uma seção de informações pessoais com links para redes sociais."
    ghLink="https://github.com/eliassgo/Bootstrap_Avan.Ebac.git"
    demoLink="https://elias-bootstrap.vercel.app/"
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

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={minhas_tarefas}
    title="Projeto To Do com VueJs - Minhas Tarefas"
    isBlog={false}
    description="Agenda de contatos feita com o Framework React com Typescript. Utilizando também React Router."
    ghLink="https://github.com/eliassgo/Todo_Vue.git"
    demoLink="https://todo-vue-vert-nu.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={mochila_viagem}
    title="JavaScript e LocalStorage: Mochila de Viagem"
    isBlog={false}
    description="Um aplicativo simples de mochila de viagem onde os usuários podem adicionar, atualizar e excluir itens da lista da mochila. Os itens são armazenados em localStorage para persistência dos dados."
    ghLink="https://github.com/eliassgo/viagem_mochila.git"
    demoLink="https://viagem-mochila.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={secret_number}
    title="JavaScript: Jogo de Adivinhação por Voz"
    isBlog={false}
    description="Este é um projeto de um jogo em que o usuário tenta adivinhar um número utilizando sua voz. O jogo possui uma interface simples em HTML, estilizada com CSS, e utiliza JavaScript para implementar a funcionalidade de reconhecimento de voz, sorteio do número e validação dos palpites."
    ghLink="https://github.com/eliassgo/secret_number.git"
    demoLink="https://secret-number-smoky.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={sorveteria}
    title="Landing Page com Bootstrap"
    isBlog={false}
    description="Essa é uma Landing Page de uma loja de sorvetes chamada Sorveteria Sky. O código faz uso de Bootstrap (versão 5.3.0-alpha3) para aplicar estilos à página. Em geral, essa Landing Page é projetada para apresentar a sorveteria de forma atraente e informativa. Ela utiliza recursos visuais, como imagens e carrossel, para chamar a atenção dos visitantes. O design responsivo permite que a página se adapte a diferentes tamanhos de tela, tornando-a adequada para visualização em dispositivos móveis e computadores."
    ghLink="https://github.com/eliassgo/projeto_bootstrap.git"
    demoLink="https://projeto-bootstrap-lemon.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={way_books}
    title="Way Books"
    isBlog={false}
    description="Esta é uma Landing Page de uma loja de livros, projetada para treinar a responsividade usando o framework Bootstrap."
    ghLink="https://github.com/eliassgo/Site_Responsivo.Ebac.git"
    demoLink="https://way-books.vercel.app/"
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;




import Cabecalho from "./components/Cabecalho";
import Secao from "./components/Secao";
import Resumo from "./components/Resumo";
import ProjetoCard from "./components/ProjetoCard";
import Rodape from "./components/Rodape";

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Controle de produtos, entradas e saídas de mercadorias.",
    responsavel: "Ana",
    status: "Concluído",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true
  },
  {
    id: 2,
    titulo: "Loja Virtual",
    descricao: "Plataforma para apresentar produtos e organizar pedidos.",
    responsavel: "Lucas",
    status: "Em desenvolvimento",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    destaque: false
  },
  {
    id: 3,
    titulo: "Agenda Escolar",
    descricao: "Organização de tarefas, trabalhos e datas de provas.",
    responsavel: "Mariana",
    status: "Em desenvolvimento",
    tecnologias: ["React", "CSS"],
    destaque: true
  },
  {
    id: 4,
    titulo: "Biblioteca Digital",
    descricao: "Cadastro de livros e consulta ao catálogo da biblioteca.",
    responsavel: "Pedro",
    status: "Planejamento",
    tecnologias: ["Java", "MySQL"],
    destaque: false
  },
  {
    id: 5,
    titulo: "Portal de Notícias",
    descricao: "Site para publicação de notícias e novidades da comunidade.",
    responsavel: "Julia",
    status: "Concluído",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    destaque: false
  },
  {
    id: 6,
    titulo: "Controle Financeiro",
    descricao: "Registro de despesas e organização do orçamento mensal.",
    responsavel: "Gabriel",
    status: "Planejamento",
    tecnologias: ["React", "Node.js"],
    destaque: false
  }
];

function App() {
  const total = projetos.length;

  const concluidos = projetos.filter(
    (projeto) => projeto.status === "Concluído"
  ).length;

  const desenvolvimento = projetos.filter(
    (projeto) => projeto.status === "Em desenvolvimento"
  ).length;

  return (
    <div className="app" id="inicio">
      <Cabecalho />

      <main className="conteudo">
        <section className="boas-vindas">
          <div>
            <span className="etiqueta">✦ NOSSO ESPAÇO DE CRIAÇÃO</span>
            <h1>
              Ideias que viram
              <span> projetos.</span>
            </h1>
            <p>
              Acompanhe os projetos da turma, confira o andamento
              de cada ideia e descubra as tecnologias utilizadas.
            </p>
            <a className="botao-projetos" href="#projetos">
              Explorar projetos <span>↗</span>
            </a>
          </div>

          <div className="boas-vindas-arte">
            <div className="arte-circulo">
              <span> {"</>"} </span>
            </div>
            <span className="estrela estrela-1">✦</span>
            <span className="estrela estrela-2">✧</span>
            <span className="arte-legenda">CRIAR • TESTAR • EVOLUIR</span>
          </div>
        </section>

        <div id="resumo">
          <Secao
            titulo="Visão geral"
            subtitulo="Um resumo de tudo que estamos construindo."
          >
            <Resumo
              total={total}
              concluidos={concluidos}
              desenvolvimento={desenvolvimento}
            />
          </Secao>
        </div>

        <div id="projetos">
          <Secao
            titulo="Projetos da turma"
            subtitulo="Conheça as ideias e acompanhe cada etapa."
          >
            <div className="projetos-grid">
              {projetos.map((projeto) => (
                <ProjetoCard
                  key={projeto.id}
                  titulo={projeto.titulo}
                  descricao={projeto.descricao}
                  responsavel={projeto.responsavel}
                  status={projeto.status}
                  tecnologias={projeto.tecnologias}
                  destaque={projeto.destaque}
                />
              ))}
            </div>
          </Secao>
        </div>
      </main>

      <Rodape />
    </div>
  );
}

export default App;

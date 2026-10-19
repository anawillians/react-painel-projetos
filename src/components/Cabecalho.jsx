
function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="logo">
        <span className="logo-icone">✦</span>
        <div>
          <h1>Dev<span>Board</span></h1>
          <p>Painel de projetos</p>
        </div>
      </div>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#resumo">Resumo</a>
        <a href="#projetos">Projetos</a>
      </nav>

      <div className="perfil">
        <span>✧</span>
        <p>Turma de Desenvolvimento</p>
      </div>
    </header>
  );
}

export default Cabecalho;

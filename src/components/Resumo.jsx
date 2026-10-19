
function Resumo({ total, concluidos, desenvolvimento }) {
  return (
    <div className="resumo-grid">
      <div className="resumo-card resumo-roxo">
        <div className="resumo-icone">▦</div>
        <p>Total de projetos</p>
        <h3>{total}</h3>
        <span>Projetos cadastrados</span>
      </div>

      <div className="resumo-card resumo-verde">
        <div className="resumo-icone">✓</div>
        <p>Concluídos</p>
        <h3>{concluidos}</h3>
        <span>Projetos finalizados</span>
      </div>

      <div className="resumo-card resumo-azul">
        <div className="resumo-icone">⌘</div>
        <p>Em desenvolvimento</p>
        <h3>{desenvolvimento}</h3>
        <span>Projetos em andamento</span>
      </div>
    </div>
  );
}

export default Resumo;
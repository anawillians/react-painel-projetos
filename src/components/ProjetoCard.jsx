
import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque
}) {
  return (
    <article className={`projeto-card ${destaque ? "card-destaque" : ""}`}>
      <div className="card-topo">
        <div className="projeto-icone">⌘</div>

        {destaque && (
          <span className="destaque">✦ Destaque</span>
        )}
      </div>

      <StatusBadge status={status} />

      <h3>{titulo}</h3>
      <p className="descricao">{descricao}</p>

      <div className="responsavel">
        <span>◉</span>
        <p>Responsável: <strong>{responsavel}</strong></p>
      </div>

      <div className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag
            key={tecnologia}
            nome={tecnologia}
          />
        ))}
      </div>
    </article>
  );
}

export default ProjetoCard;

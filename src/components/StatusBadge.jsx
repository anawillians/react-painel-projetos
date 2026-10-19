
function StatusBadge({ status }) {
  let classe = "status-planejamento";

  if (status === "Concluído") {
    classe = "status-concluido";
  } else if (status === "Em desenvolvimento") {
    classe = "status-desenvolvimento";
  }

  return (
    <span className={`status-badge ${classe}`}>
      <span className="status-ponto">●</span>
      {status}
    </span>
  );
}

export default StatusBadge;

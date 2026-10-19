
function Secao({ titulo, subtitulo, children }) {
  return (
    <section className="secao">
      <div className="secao-cabecalho">
        <div>
          <h2>{titulo}</h2>
          {subtitulo && <p>{subtitulo}</p>}
        </div>
        <span className="secao-detalhe">✧</span>
      </div>

      {children}
    </section>
  );
}

export default Secao;

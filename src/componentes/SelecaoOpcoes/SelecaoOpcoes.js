import "./SelecaoOpcoes.css";

function SelecaoOpcoes({ label, times, aoAlterar, valor }) {
  return (
    <div className="opcoes">
      <label>{label}</label>
      <select value={valor} onChange={(event) => aoAlterar(event.target.value)} required>
        <option />
        {times.map((t, indice) => (
          <option key={indice}>
            {t.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelecaoOpcoes;

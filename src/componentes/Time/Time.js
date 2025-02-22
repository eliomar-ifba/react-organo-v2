import { Tooltip } from "@mui/material";
import hexToRgba from "hex-to-rgba";
import Card from "../Card/Card";
import "./Time.css";

function Time({
  time,
  colaboradores,
  aoDeletarCard,
  aoFavoritar,
  aoAlterarCard,
  aoMudarCorTime,
}) {


  return (
    colaboradores.length > 0 && (
      <article
        className="time"
        style={{ backgroundColor: hexToRgba(time.cor, "0.5") }}
      >

      
        <Tooltip title="Mudar cor do time" placement="top">
          <input className="cor-time" type="color" value={time.cor} onChange={(evento) => aoMudarCorTime(time, evento.target.value)} />
        </Tooltip>

        <h2 style={{ borderBottom: `4px solid ${time.cor}` }}>{time.nome}</h2>

        <div className="card-container">
          {colaboradores.map((colaborador, i) => (
            <Card
              key={i}
              colaborador={colaborador}
              aoDeletarCard={aoDeletarCard}
              aoAlterarCard={aoAlterarCard}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </article>
    )
  );
}

export default Time;

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Tooltip } from "@mui/material";
import "./Card.css";

function Card({ colaborador, aoDeletarCard, aoFavoritar, aoAlterarCard }) {

  return (
    <article className="card-colaborador">
      <div className="imagem" style={{ backgroundColor: colaborador.time.cor }}>
        <Tooltip title="Excluir Card" placement="top">
          <DeleteForeverIcon
            className="icone-delete"
            onClick={() => {aoDeletarCard(colaborador)}}
            title="Deletar card"
          />
        </Tooltip>

        <Tooltip title="Editar Card" placement="bottom">
          <EditIcon
            className="icone-edit"
            onClick={() => aoAlterarCard(colaborador)}
          />
        </Tooltip>
        <img src={colaborador.imagem} />
      </div>
      <div className="dados">
        <h4>{colaborador.nome}</h4>
        <p>{colaborador.cargo}</p>

        <div onClick={() => aoFavoritar(colaborador)} className="favorito-area">
          {colaborador.favorito ? (
            <Tooltip title="Remover dos Favoritos" placement="bottom">
              <FavoriteIcon color="error" />
            </Tooltip>
          ) : (
            <Tooltip title="Adicionar os Favoritos" placement="bottom">
              <FavoriteBorderIcon />
            </Tooltip>
          )}
        </div>
      </div>

       
    </article>
  );
}

export default Card;

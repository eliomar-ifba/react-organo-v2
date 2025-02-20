import "./Card.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from '@mui/icons-material/Edit';


function Card({ colaborador, aoDeletarCard, aoFavoritar, aoAlterarCard }) {

  

  return (
    <article className="card-colaborador">
      <div className="imagem" style={{ backgroundColor: colaborador.time.cor }}>
        <DeleteForeverIcon
          className="icone-delete"
          onClick={() => aoDeletarCard(colaborador)}
        />
        <EditIcon
          className="icone-edit"
          onClick={()=> aoAlterarCard(colaborador)}
        />
        <img src={colaborador.imagem} />
      </div>
      <div className="dados">
        <h4>{colaborador.nome}</h4>
        <p>{colaborador.cargo}</p>
        <div onClick={() => aoFavoritar(colaborador)} className="favorito-area">
          {colaborador.favorito ? <FavoriteIcon color="error"/> : <FavoriteBorderIcon />}
        </div>
      </div>
   
    </article>



  );
}

export default Card;

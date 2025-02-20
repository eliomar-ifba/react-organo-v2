import "./Rodape.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="logos-redes">
        <a href="https://www.instagram.com"  target="_blank"  ><InstagramIcon /></a>
        <a href="https://www.facebook.com"  target="_blank"><FacebookIcon /></a>
        <a href="https://www.x.com"  target="_blank"><TwitterIcon /></a>
        
      </div>
      <img className="logo-organo" src="/imagens/logo.png" alt="Logo Organo" />
      <p className="texto-desenvolvidopor">Desenvolvido por Eliomar e Alura.</p>
    </footer>
  );
}


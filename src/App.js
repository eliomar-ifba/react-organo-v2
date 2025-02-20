import { Alert, AlertTitle, Fade } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Banner from "./componentes/Banner/Banner";
import {
  FormAlterarCard,
  FormNovoCard,
} from "./componentes/Formulario/Formulario";
import Rodape from "./componentes/Rodape/Rodape";
import Time from "./componentes/Time/Time";
import { getColaboradores, getTimes } from "./dados/dados";

function App() {
  const [times, setTimes] = useState(getTimes);
  const [colaboradores, setColaboradores] = useState([...getColaboradores()]);
  const [formAlterarIsVisible, setformAlterarIsVisible] = useState(false);
  const [colaboradorFormAlterar, setColaboradorFormAlterar] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");

  function criarCard(novoColaborador) {
    setColaboradores([...colaboradores, novoColaborador]);
    setShowAlert(true);
    setMessageAlert("Card colaborador criado!");
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }

  function deletarCard(colaborador) {
    const novaListaColaboradores = colaboradores.filter(
      (c) => c.id !== colaborador.id
    );
    setColaboradores(novaListaColaboradores);
    setShowAlert(true);
    setMessageAlert("Colaborador excluído!");
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }

  function abrirCard(colaborador) {
    setformAlterarIsVisible(true);
    setColaboradorFormAlterar(colaborador);
  }

  function atualizarColaborador(colaborador) {
    const novaListaColaboradores = colaboradores.filter(
      (c) => c.id !== colaborador.id
    );
    setColaboradores([...novaListaColaboradores, colaborador]);
    setformAlterarIsVisible(false);
    setShowAlert(true);
    setMessageAlert("Colaborador alterado!");
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }

  function favoritar(colaborador) {
    console.log("Colaborador favoritado: ", colaborador);
    const novaListaColaboradores = colaboradores.map((c) => {
      if (c.id === colaborador.id) {
        c.favorito = !c.favorito;
      }
      return c;
    });
    setColaboradores(novaListaColaboradores);
  }

  function criarTime(novoTime) {
    setTimes([...times, novoTime]);
  }

  function mudarCorTime(time, cor) {
    const listaTimeAtualizado = times.map((t) => {
      if (t.nome === time.nome) {
        t.cor = cor;
      }
      return t;
    });

    const listaColaboradoresAtualizada = colaboradores.map((c) => {
      if (c.time.nome === time.nome) {
        c.time.cor = cor;
      }
      return c;
    });

    setTimes(listaTimeAtualizado);
    setColaboradores(listaColaboradoresAtualizada);
    console.log("Cor alterada: ", cor);
    console.log("colaboradores: ", colaboradores);
  }

  return (
    <div className="App">
      {/* Apenas abre o alert se showAlert for true */}
      <Fade in={showAlert} timeout={1000}>
        <Alert
          severity="success"
          sx={{
            position: "fixed",
            width: "100%",
          }}
        >
          <AlertTitle>Sucesso</AlertTitle>
          {messageAlert}
        </Alert>
      </Fade>

      <Banner />

      <FormNovoCard
        times={times}
        aoCriarCard={criarCard}
        aoCriarTime={criarTime}
      />

      {formAlterarIsVisible && (
        <FormAlterarCard
          colaborador={colaboradorFormAlterar}
          alterarIsVisible={(v) => setformAlterarIsVisible(v)}
          aoAlterarForm={atualizarColaborador}
          times={times}
        />
      )}

      <section className="times">
        <h1>Minha Organização</h1>
        {times.map((time, i) => (
          <Time
            key={i}
            time={time}
            colaboradores={colaboradores.filter(
              (c) => c.time.nome === time.nome
            )}
            aoDeletarCard={deletarCard}
            aoFavoritar={favoritar}
            aoAlterarCard={abrirCard}
            aoMudarCorTime={mudarCorTime}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;

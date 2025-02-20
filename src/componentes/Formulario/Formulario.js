import { Alert, AlertTitle, Tooltip } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Botao from "../Botao/Botao";
import Campo from "../Campo/Campo";
import SelecaoOpcoes from "../SelecaoOpcoes/SelecaoOpcoes";
import "./Formulario.css";



export function FormNovoCard({aoCriarCard, times, aoCriarTime}) {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [foto, setFoto] = useState('')
  const [time, setTime] = useState('')
  const [corNovoTime, setCorNovoTime] = useState('#82CFFA')
  const [nomeNovoTime, setNomeNovoTime] = useState('')


  function submeterFormulario(evento){
    evento.preventDefault()

    const novoColaborador = {
      id: uuidv4(),
      nome,
      favorito: false,
      cargo,
      imagem: foto,
      time: times.find(t => t.nome === time)
    }
    aoCriarCard(novoColaborador)
  }

  function submeterFormularioTime(evento){
    evento.preventDefault()

    const novoTime = {
      id: uuidv4(),
      nome: nomeNovoTime,
      cor: corNovoTime
    }

    aoCriarTime(novoTime)
  }


  return (
    <section className="formulario-container">
      <form onSubmit={(evento) => submeterFormulario(evento)} className="formulario">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo tipo="text" valor={nome} aoAlterar={valor => setNome(valor)} label="Nome" placeholder="Digite seu nome" />
        <Campo tipo="text" valor={cargo} aoAlterar={valor => setCargo(valor)} label="Cargo" placeholder="Digite seu cargo" />
        <Campo tipo="text" valor={foto} aoAlterar={valor => setFoto(valor)} label="Foto" placeholder="Informe a URL da foto" />
        <SelecaoOpcoes valor={time} times={times} aoAlterar={valor => setTime(valor)} label="Time"/>
        <Botao texto="Criar Card"/>
      </form>

      <form onSubmit={(evento) => submeterFormularioTime(evento)} className="formulario">
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo tipo="text" valor={nomeNovoTime} aoAlterar={valor => setNomeNovoTime(valor)} label="Nome" placeholder="Digite o nome do time" />
        <Campo tipo = "color" valor={corNovoTime} aoAlterar={valor => setCorNovoTime(valor)} label="Cor" />
        
        <Botao texto="Criar Time"/>
      </form>

    </section>
  );
}


// ALTERAR COLABORADOR

export function FormAlterarCard({colaborador, alterarIsVisible, aoAlterarForm, times}) {

  const [nome, setNome] = useState(colaborador.nome)
  const [cargo, setCargo] = useState(colaborador.cargo)
  const [foto, setFoto] = useState(colaborador.imagem)
  const [time, setTime] = useState(colaborador.time.nome)

  function submeterFormulario(evento){
    evento.preventDefault()

    console.log("Time escolhido: ", time)

    const colaboradorAtualizado = {
      id: colaborador.id,
      nome,
      favorito: false,
      cargo,
      imagem: foto,
      time: times.find(t => t.nome === time)
    }
    aoAlterarForm(colaboradorAtualizado)
  }

  return(
    <section className="formulario-container" >
      <div className="modal" >
        <form onSubmit={(evento) => submeterFormulario(evento)} className="formulario modal-content"  >
          <Tooltip title="Fechar" placement="bottom">
            <span onClick={() => alterarIsVisible(false)} className="close" title="Fechar" >&times;</span>
          </Tooltip>
          <h2>Altere o card do colaborador</h2>
            <Campo tipo="text" valor={nome} aoAlterar={valor => setNome(valor)} label="Nome" placeholder="Digite seu nome" />
            <Campo tipo="text" valor={cargo} aoAlterar={valor => setCargo(valor)} label="Cargo" placeholder="Digite seu cargo" />
            <Campo tipo="text" valor={foto} aoAlterar={valor => setFoto(valor)} label="Foto" placeholder="Informe a URL da foto" />
            <SelecaoOpcoes valor={time} times={times} aoAlterar={valor => setTime(valor)} label="Time"/>
            <Botao texto="Atualizar Card"/>
        </form>
       
      </div>

      
   </section>
  )
}


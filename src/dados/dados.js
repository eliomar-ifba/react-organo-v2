import { v4 as uuidv4 } from "uuid";

export function getTimes() {
  const times = [
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    }
  ];
  return times;
}

export function getColaboradores() {
  const colaboradores = [
    {
      id: uuidv4(),
      nome: "JULIANA AMOASEI",
      favorito: false,
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: getTimes()[0],
    },
    {
      id: uuidv4(),
      nome: "DANIEL ARTINE",
      favorito: false,
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: getTimes()[0],
    },
    {
      id: uuidv4(),
      nome: "JULIANA AMOASEI",
      favorito: false,
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: getTimes()[1],
    },
    {
      id: uuidv4(),
      nome: "DANIEL ARTINE",
      favorito: false,
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: getTimes()[1],
    }
  ];

  return colaboradores;
}

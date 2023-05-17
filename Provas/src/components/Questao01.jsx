import { useEffect, useState } from "react";

const alunos = [
  { nome: "Sicrano", notas: { ap1: 8.4, ap2: 1.4 } },
  { nome: "Beltrano", notas: { ap1: 4.5, ap2: 3.5 } },
  { nome: "Fulano", notas: { ap1: 5.3, ap2: 9.2 } }
];

function Questao01X() {
  const [alunosMedias, setAlunosMedias] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função que será passada para o componente filho que irá atualizar o estado da média dos alunos
  const handleSetAlunosMedias = (alunosMedias) => {
    // Simulando um delay para aparecer o "Carregando..." na tela
    setTimeout(() => {
      setAlunosMedias(alunosMedias);
      setLoading(false);
    }, 1000);
  };

  const getAlunosComMediaMenorOuIgualA5 = () => {
    // Filtrando os alunos com média maior ou igual a 5
    return alunosMedias.filter((aluno) => aluno.media <= 5);
  };

  return (
    <>
      {/* Chamando o componente Questao01Y para fazer o cálculo da média e retornar, via callback, o vetor com os alunos e média */}
      <Questao01Y alunos={alunos} setAlunosMedias={handleSetAlunosMedias} />

      <h2>Alunos com média menor ou igual a 5:</h2>

      {/* Se estiver carregando apareça "Carregando...", senão, mostre uma lista com os alunos e média */}

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {
            getAlunosComMediaMenorOuIgualA5()
              .map((aluno, index) => (
                <li key={index}>{aluno.nome}: {aluno.media}</li>
              ))
          }
        </ul>
      )}
    </>
  );
}

const Questao01Y = ({ alunos, setAlunosMedias }) => {
  useEffect(() => {
    // Calculando a média de cada aluno e convertendo o vetor de alunos para um vetor de objetos com nome e média
    const alunosMedias = alunos.map((aluno) => {
      const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;

      return { nome: aluno.nome, media };
    });

    setAlunosMedias(alunosMedias);
  }, [alunos]);
}

export default Questao01X;

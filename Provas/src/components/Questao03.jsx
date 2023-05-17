import { useEffect, useState } from "react";

const Questao03 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [menorPopulacao, setMenorPopulacao] = useState({});
  const [maiorPopulacao, setMaiorPopulacao] = useState({});

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Variáveis auxiliares para guardar o menor e maior país
        let menorPopulacao = {
          capital: data[0].capital[0],
          populacao: data[0].population
        };

        let maiorPopulacao = {
          capital: data[0].capital[0],
          populacao: data[0].population
        }

        // Perconrrendo o vetor de países advindo da requisição para encontrar o menor e maior país
        data.forEach((pais) => {
          if (pais.population < menorPopulacao.populacao) {
            menorPopulacao.capital = pais.capital[0];
            menorPopulacao.populacao = pais.population;
          }

          if (pais.population > maiorPopulacao.populacao) {
            maiorPopulacao.capital = pais.capital[0];
            maiorPopulacao.populacao = pais.population;
          }
        });

        setMenorPopulacao(menorPopulacao);
        setMaiorPopulacao(maiorPopulacao);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
      // ^----- O finally é executado para setar o loading como false, com a finalidade de mostrar os dados da requisição tratada após o carregamento
  }, []);

  if (error) {
    return <p>Erro ao carregar os dados da API</p>;
  }

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          <li>Menor População: {menorPopulacao.capital} ({menorPopulacao.populacao} habitantes)</li>
          <li>Maior População: {maiorPopulacao.capital} ({maiorPopulacao.populacao} habitantes)</li>
        </ul>
      )}
    </>
  );
};

export default Questao03;

import { useState } from "react";

const Questao02 = () => {
  const [flag, setFlag] = useState(false);

  // Função auxiliar para retornar a imagem do Pokémon de acordo com o state de flag
  const getPokemonImage = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${flag ? '/back' : ''}/25.png`;
  };

  // Função auxiliar para retornar se o Pokémon está de costas ou frente para usar como texto
  const getPokemonStatus = (status) => {
    return status ? 'costas' : 'frente';
  };

  return (
    <>
      <h2>Clique no botão para inverter a imagem do Pokémon:</h2>

      {/* Ao apertar no botão, o state flag irá ser alterado e o componente irá renderizar novamente, fazendo com que a imagem do Pokémon e seu "status" (frente/costas) atualize */}
      <img src={getPokemonImage()} alt={`Pokémon de ${getPokemonStatus(flag)}`} />

      <br />

      <button onClick={() => setFlag(!flag)}>Ver de {getPokemonStatus(!flag)}</button>
    </>
  )
}

export default Questao02;

export const gimmeAPokemon = () => {
  const pokemon = [
    "Pichu",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidorina",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
  ];

  return pokemon[Math.floor(Math.random() * pokemon.length)];
};

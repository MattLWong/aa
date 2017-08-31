export const fetchAllPokemon = () => (
  $.ajax({
    url: 'api/pokemon',
    type: "GET"
  })
);

export const fetchSinglePokemon = (id) => (
  $.ajax({
    url: `api/pokemon/${id}`,
    type: "GET"
  })
);

export const createPokemon = (pokemon) => {
  pokemon.moves = Object.keys(pokemon.moves).map(k => pokemon.moves[k]);
  return(
    $.ajax({
      url: `api/pokemon`,
      type: "POST",
      data: { pokemon }
    })
  )
}

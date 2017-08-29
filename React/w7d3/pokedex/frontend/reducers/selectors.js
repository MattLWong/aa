export const selectAllPokemon = (state) => {
  let arr = [];
  let keys = Object.keys(state.entities.pokemon);
  keys.forEach( (key) => (
    arr.push(state.entities.pokemon[key])
  ))
  return arr;
};

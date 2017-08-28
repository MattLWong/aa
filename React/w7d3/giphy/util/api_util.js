export const fetchSearchGiphys = (search_term) => (
  $.ajax({
    method: "GET",
    url: `http://api.giphy.com/v1/gifs/search?q=${search_term}&api_key=dc6zaTOxFJmzC&limit=4`,
  })
);

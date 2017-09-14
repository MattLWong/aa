export const fetchBenches = data => (
  $.ajax({
    method: "GET",
    url: "/api/benches",
    data
  })
)

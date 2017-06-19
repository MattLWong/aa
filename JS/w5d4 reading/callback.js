setTimeout(function () {
  console.log('hello');
}, 2000);

function scheduleGreatMovieReminder(movie) {
  // remind in one min
  setTimeout(function () {
    console.log(`Remember to watch: ${movie}`);
  }, 6 * 1000);
  console.log(`Timer set for ${movie}`)
}

scheduleGreatMovieReminder("Citizen Kane");
scheduleGreatMovieReminder("Touch of Evil");
scheduleGreatMovieReminder("The Third Man");

function test(a) {
  return a + c;
}

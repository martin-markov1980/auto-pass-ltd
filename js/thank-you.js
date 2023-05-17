// Redirect the 'Thank you' page to the home page after 10 seconds.
let seconds = document.getElementById('seconds');

setInterval(() => {
  seconds.innerHTML--;
  if (seconds.innerHTML < 1) {
    location.replace("https://martin-markov1980.github.io/auto-pass-ltd/index.html");
  }
}, 1000)

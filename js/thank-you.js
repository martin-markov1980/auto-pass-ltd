// Redirects the 'Thank you' page to the home page after 10 seconds.
let seconds = document.getElementById('seconds');

setInterval(() => {
  seconds.innerHTML--;
  if (seconds.innerHTML < 1) {
    location.replace("https://www.autopassltd.com");
  }
}, 1000)

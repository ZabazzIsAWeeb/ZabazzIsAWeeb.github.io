document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})

var texts = [
  "He really is.",
  "Call him one.",
  "I swear.",
  "It's not just for the memes.",
  "He also may or may not use BetterDiscord.",
  "*anime noises*",
  "Send help.",
];

document.getElementById("mainText").innerHTML = texts[Math.floor(Math.random()*texts.length)];;

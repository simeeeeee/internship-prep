const phrase = document.querySelector(".js-phrase");
const phrases = [
  "When you have faults, do not fear to abandon them. _ Confucius",
  "You will face many defeats in life, but never let yourself be defeated. _ Maya Angelou",
  "This too shall pass. _ Et hoc transibit",
  "Life is either a daring adventure or nothing at all. _ Helen Keller",
  "Only I can change me life, no one can do it for me. _ Carol Burnett",
  "When in doubt, choose change. _ Lily leung",
  "Being happy never goes out of style. _ Lilly Pulitzer",
  "Turn your wounds into wisdom. _ Oprah Gail Winfrey",
  "Change the world by being yourself. _ Amy Poehler",
];
function randomIdx() {
  return Math.floor(Math.random() * phrases.length);
}
function loadPhrase() {
  const idx = randomIdx();
  console.log(phrases[idx]);
  phrase.innerText = phrases[idx];
  console.log(phrase.innerText);
}
function init() {
  loadPhrase();
}

init();

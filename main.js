const cards = document.querySelectorAll(".card");
let previousCard = null;
let count = 0;
shuffleCard();

cards.forEach(card => card.addEventListener("click", flip));


function flip() {
  count++;
  toggleImage(this);
  this.classList.toggle("flip");

  if(count % 2 == 1) {
    previousCard = this;
    return;
  }

  if(previousCard != this && isMatch(previousCard, this)) {
    alert("Hurray, cards are the same!");

    previousCard.removeEventListener("click", flip);
    this.removeEventListener("click", flip);
    return;
  }

  delayToggleImage(this, 500);
  delayToggleImage(previousCard, 500);
}

function isMatch(firstCard, secondCard) {
  firstImg = firstCard.querySelector(".back");
  secondImg = secondCard.querySelector(".back");

  return firstImg.src === secondImg.src;
}

function toggleImage(card) {
  card.querySelector(".front").classList.toggle("hide");

  card.querySelector(".back").classList.toggle("show");
}

function delayToggleImage(card, miliseconds) {
  setTimeout(()=> toggleImage(card), miliseconds);
}

function shuffleCard() {
  cards.forEach(card => {
    let index = Math.floor(Math.random()*12);
    card.style.order = index;
  });
}
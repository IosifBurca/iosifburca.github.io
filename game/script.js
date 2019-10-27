const items = document.querySelectorAll('.item');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let mySound = new sound("audio/success.mp3");
function flipItem() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip');

    if(!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    } 
        //second click
        secondCard = this;

        checkForMatch();

}
function checkForMatch() {
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        mySound.play();
    } else {
        unflipCards();
    }        
}
function disableCards() {
    firstCard.removeEventListener('click', flipItem);
    secondCard.removeEventListener('click', flipItem);

    resetBoard();
}
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
    }, 1500);
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
(function shuffle() {
    items.forEach(item => {
        let randomPos = Math.floor(Math.random() * 12);
        item.style.order = randomPos;
    });
})();

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  };
items.forEach(item => item.addEventListener('click', flipItem));
// import dataJson from './deck.json' assert {type: 'json'};
async function getData(url) {
  const resp = await fetch(url);

  return resp.json();
}

const dataJson = await getData('./deck.json');

const dealCards = document.querySelector('.button_container');
const perkOne = document.getElementById('perkOne');
const perkTwo = document.getElementById('perkTwo');
const dealBreaker = document.getElementById('dealBreaker');

// generates a random number based on the length of the deck provided
let randN = (total) =>  Math.floor(Math.random() * total.length);

function genRedCard(dealBreaker) {
  let rand = randN(dealBreaker);

  return dealBreaker[rand].joke
}

function genWhiteCard(perk) {
    let rand = randN(perk)

    return perk[rand].joke
}

dealCards.addEventListener('click', function() {
    perkOne.innerText = genWhiteCard(dataJson.perks)
    perkTwo.innerText = genWhiteCard(dataJson.perks)
    dealBreaker.innerText = genWhiteCard(dataJson.dealbreakers)
})

// Modal content
let modal = document.getElementById("my-modal");
let open = document.getElementById("open");
let close = document.getElementById("close");
// let modal = document.getElementById("my-modal")

open.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
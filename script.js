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

// let genRedCard = (dealBreaker) => {
//     let rand = randN(dealBreaker)

//     return dealBreaker[rand].joke
// }

// let genWhiteCard = (perk) => {
//     let rand = randN(perk)

//     return perk[rand].joke
// }

dealCards.addEventListener('click', function() {
    perkOne.innerText = genWhiteCard(dataJson.perks)
    perkTwo.innerText = genWhiteCard(dataJson.perks)
    dealBreaker.innerText = genWhiteCard(dataJson.dealbreakers)
})

// Modal content
const modal = document.querySelector(".modal");
const btn = document.getElementById("how_to_play");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
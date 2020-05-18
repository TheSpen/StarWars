const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; 


const deck = [];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
          deck.push({
              suit: suits[i],
              rank: ranks[j],
          });
        }
      }


//console.log("deck:", deck);

var shuffledDeck = deck

var i = shuffledDeck.length, j, temp;
while(--i > 0){
    j = Math.floor(Math.random() * (i+1)); 
    temp = shuffledDeck[j];
    shuffledDeck[j] = shuffledDeck[i];
    shuffledDeck[i] = temp;
}
//console.log(shuffledDeck)

const midPoint = shuffledDeck.length / 2;
const rebelDeck = shuffledDeck.slice(0, midPoint);
const empireDeck = shuffledDeck.slice(midPoint);

// TODO: Write logic to shift card from each players deck and distribute both cards to winner
let battleNumber = 1


function battle(rebel, empire) {
  console.log('Battle #' + battleNumber)
  let rebelBattleCard = rebelDeck.shift()
  let empireBattleCard = empireDeck.shift()
  console.log("The Rebels throw " + rebelBattleCard.rank + " of " + rebelBattleCard.suit)
  console.log("The Empire throws " + empireBattleCard.rank + " of " + empireBattleCard.suit)
  if (rebelBattleCard.rank == empireBattleCard.rank) {
    function greatBattle () {
      let rebelHolder = []
      let empireHolder = []
      rebelHolder.push(rebelDeck.splice(0,3))
      empireHolder.push(empireDeck.splice(0,3))
      if (rebelBattleCard.rank > empireBattleCard.rank) {
        rebelDeck.push(rebelHolder)
        rebelDeck.push(empireHolder) 
      } else if (rebelBattleCard.rank < empireBattleCard.rank) {
        empireDeck.push(rebelHolder)
        empireDeck.push(empireHolder)
      } else {
        greatBattle()
      }
    }
  } else if (rebelBattleCard.rank > empireBattleCard.rank) {
      rebelDeck.push(rebelBattleCard)
      rebelDeck.push(empireBattleCard)
      console.log('The Rebel Scum won battle #' + battleNumber)
  } else {
      empireDeck.push(rebelBattleCard)
      empireDeck.push(empireBattleCard)
      console.log('The Evil Empire won battle #' + battleNumber)
  }
  //console.log(rebelDeck)
  //console.log(empireDeck)
  console.log("Rebel Troops: " + rebelDeck.length)
  console.log("Empire Troops: " + empireDeck.length)
  console.log("================================")
  battleNumber++
}


//function greatBattle () {
    //let rebelHolder = []
    //let empireHolder = []
    //rebelHolder.push(rebelDeck.splice(0,3))
    //empireHolder.push(empireDeck.splice(0,3))
    //if (rebelBattleCard.rank > empireBattleCard.rank) {
      //rebelDeck.push(rebelHolder)
      //rebelDeck.push(empireHolder) 
    //} else if (rebelBattleCard.rank < empireBattleCard.rank) {
      //empireDeck.push(rebelHolder)
      //empireDeck.push(empireHolder)
    //} else {
      //greatBattle()
    //}
//}


//console.log(battle())

// TODO: repeat draw logic until one players deck is empty
function starWars(rebel, empire) {
  while(rebelDeck.length > 0 && empireDeck.length > 0 && battleNumber <= 100) {
    battle(rebelDeck, empireDeck)
  } if (rebelDeck.length == 0) {
    console.log("Player Two won the war!")
  } else if (empireDeck.length == 0) {
    console.log("Player One won the war!")
  }
  console.log("1000 battles were not enough to end this war. The war wages on...")
}

console.log(starWars(rebelDeck, empireDeck))















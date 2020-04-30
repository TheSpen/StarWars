// 1. Build a deck of cards
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

// 2. Shuffle the deck
const shuffledDeck = deck
let i = shuffledDeck.length, j, temp;
while(--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = shuffledDeck[j];
    shuffledDeck[j] = shuffledDeck[i];
    shuffledDeck[i] = temp;
}

// 3. Split the Deck
const midPoint = shuffledDeck.length / 2;
const rebels = shuffledDeck.slice(0, midPoint);
const empires = shuffledDeck.slice(midPoint);

// TODO: Write logic to shift card from each players deck and distribute both cards to winner
function battle(rebels, empires, battleNumber = 1) {
    const rebelBattleCard = rebels.shift()
    const empireBattleCard = empires.shift()

    console.log('Battle #' + battleNumber)
    console.log("The Rebels throw " + rebelBattleCard.rank + " of " + rebelBattleCard.suit)
    console.log("The Empire throws " + empireBattleCard.rank + " of " + empireBattleCard.suit)

    if (rebelBattleCard.rank > empireBattleCard.rank) {
        rebels.push(rebelBattleCard, empireBattleCard)
        console.log('The Rebel Scum won battle #' + battleNumber)
    } else {
        empires.push(rebelBattleCard, empireBattleCard)
        console.log('The Evil Empire won battle #' + battleNumber)
    }

    console.log("Rebel Troops: " + rebels.length)
    console.log("Empire Troops: " + empires.length)
    console.log("================================")
}

// TODO: repeat draw logic until one players deck is empty
function starWars(rebels, empires, maxBattles = 10) {
    let currentBattle = 0;

    while(rebels.length > 0 && empires.length > 0 && currentBattle++ < maxBattles) {
        battle(rebels, empires, currentBattle)
    }

    if (rebels.length == 0) {
        return "The Empire reigns!";
    }

    if (empires.length == 0) {
        return "The Rebels have prevailed!";
    }

    return maxBattles + " battles were not enough to end this war. The war wages on...";
}

// 4. Play
console.log(starWars(rebels, empires));

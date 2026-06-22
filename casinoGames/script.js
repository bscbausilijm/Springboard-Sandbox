const casinoGame = {
    shoe: {
        deck: {
            card: {
                makeCard: function(value, suit) {
                    return { value, suit }; // AKA: return { value: value, suit: suit };
                }
            }, //end card object
        //deck object keys
            deckArray: [],
            cardGrid: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
            suitGrid: ["of Hearts", "of Spades", "of Diamonds", "of Clubs"],
            loadDeck: function() {
                let card;
                this.suitGrid.forEach((suit) => {
                    this.cardGrid.forEach((value) => {
                        this.deckArray.push(this.card.makeCard(value, suit));
                    });
                });
            }
        }, //end deck object
    }, //end shoe object
};

const cardSmallParse = (card) => {
    const { value, suit } = card;
    return value;
}

//json parse
const jParse = (args) => {
    return JSON.parse(args);
}

//json stringify
const jStringify = (args) => {
    return JSON.stringify(args);
}

document.addEventListener("DOMContentLoaded", () => {
    const head = document.querySelector("#playerUIHeader");
    const header = document.createElement("h1");
    header.textContent = "test: ";
    head.appendChild(header);
});

const pushCard = (n) => {
    const card = document.createElement("div");
    const table = document.querySelector("#playerUI");
    card.textContent = n;
    card.classList.toggle('card');
    table.appendChild(card);
}

const runCardTest = (n) => {
    let card;
    for (let x = 0; x <= 5; x++) {
        card = casinoGame.shoe.deck.deckArray[x];
        pushCard(card.value);
    }
}   

casinoGame.shoe.deck.loadDeck();
runCardTest();
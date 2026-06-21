const casinoGame = {

};

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
    header.textContent = "Menu:";
    head.appendChild(header);
});

const pushCard = (n) => {
    const card = document.createElement("div");
    const table = document.querySelector("#playerUI");
    card.textContent = n;
    card.classList.toggle('card');
    table.appendChild(card);
}

const runCardTest = () => {
    for (let x = 0; x <= 4; x++) pushCard("lol");
}

runCardTest();
let quotes = ["No pain, no gain", "Fail to prepare, prepare to fail", "Carpe Diem", "I can, I will"];

const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomIndex];
    return randomQuote;
};
console.log(generateRandomQuote());

let button = document.querySelector(".btn");
let paragraph = document.querySelector(".para");
let revealQuote = document.querySelector(".quote");

button.classList.remove("hide");
paragraph.classList.remove("hide");
revealQuote.classList.add("hide");

button.addEventListener("click", function() {
    generateRandomQuote();
    button.classList.add("hide");
    paragraph.classList.add("hide");
    revealQuote.classList.remove("hide");
});
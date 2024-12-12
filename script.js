const quotesArray = [ 
    "Just one small positive thought in the morning can change your whole day",
    "Success is the ability to go from one failure to another with no loss of enthusiasm",
    "The future belongs to those who believe in the beauty of their dreams",
    "Your time is limited, so don't waste it living someone else's life",
    "The greatest glory in living lies not in never falling, but in rising every time we fall",
    "It is never too late to be what you might have been",
    "I am not a product of my circumstances. I am a product of my decisions",
    "A good plan violently executed now is better than a perfect plan executed next week.",
    "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    "Setting goals is the first step in turning the invisible into the visible.",
    "You can't cross the sea merely by standing and staring at the water.",
    "Opportunity does not knock, it presents itself when you beat down the door.",
    "Something positive here",
];

const quoteBtn = document.getElementById("quote-cta");
const theQuote = document.getElementById("the-quote");

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotesArray.length);
    let newQuote = quotesArray[randomIndex];

    theQuote.innerHTML = newQuote;
}

quoteBtn.addEventListener("click", generateQuote);

generateQuote();
const quotes = [
    {
        quote: "Stay hungry, stay foolish",
        author: "- Steve Jobs -",
    },
    {
        quote: "Have the courage to follow your heart and intuition",
        author: "- Steve Jobs -",
    },
    {
        quote: "Your time is limited so don't waste it living someone else's mind",
        author: "- Steve Jobs -",
    },
    {
        quote: "If you born poor not your mistake but if you die poor is your mistake",
        author: "- Bill gates -",
    },
    {
        quote: "Life is not fair get used to it",
        author: "- Bill gates -",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "- Albert Einstein -",
    },
    {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "- Mae West -",
     },
    {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "- Hemmingway -",
    },
    {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "- Hilaire Belloc -",
     },
    {
    quote: "Travel expands the mind and fills the gap.",
    author: "- Sheda Savage -",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
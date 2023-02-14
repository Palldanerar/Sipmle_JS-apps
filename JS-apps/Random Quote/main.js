const quoteBlock = document.querySelector(".quote")
const authorBlock = document.querySelector(".name-author")
const btn = document.querySelector("button")

function randomQuote() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quoteBlock.textContent = data.content
        authorBlock.textContent = data.author
    })
}

btn.addEventListener("click", randomQuote)

randomQuote()
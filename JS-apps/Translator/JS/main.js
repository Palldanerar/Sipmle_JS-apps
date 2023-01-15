import {languages} from "./languages.js"

const selectTag = document.querySelectorAll("select")
const translateBtn = document.querySelector("button")
const formText = document.querySelector(".from-text")
const textTo = document.querySelector(".from-to")
const exchangeBtn = document.querySelector(".exchange")
const icons = document.querySelectorAll(".row")

selectTag.forEach((tag, id) => {
    for (const country_code in languages) {

        let selected;
        if (id == 0 && country_code == "ru-RU") {
            selected = "selected"
        } else if (id == 1 && country_code == "en-GB") {
            selected = "selected"
        }

        let option = `<option value="${country_code}" ${selected}>${languages[country_code]}</option>`
        tag.insertAdjacentHTML("beforeend", option)
    }
})

exchangeBtn.addEventListener("click", () => {
    let tempText = formText.value
    let tempLang = selectTag[0].value
    formText.value = textTo.value
    selectTag[0].value = selectTag[1].value
    textTo.value = tempText
    selectTag[1].value = tempLang
})

translateBtn.addEventListener("click", () => {
    let text = formText.value
    let translateFrom = selectTag[0].value
    let translateTo = selectTag[1].value
    if (!text) return
    const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        textTo.value = data.responseData.translatedText
    })
})

icons.forEach(icon => {
    icon.addEventListener("click", (e) => {
        if (e.target.classList.contains("bi-clipboard")) {
            if(e.target.id == "from") {
                navigator.clipboard.writeText(formText.value)
            } else {
                navigator.clipboard.writeText(textTo.value)
            }
        } else if (e.target.classList.contains("bi-volume-up-fill")) {
            let utterance

            if (e.target.id == "from") {
                utterance = new SpeechSynthesisUtterance(formText.value)
                utterance.lang = selectTag[0].value
            } else {
                utterance = new SpeechSynthesisUtterance(textTo.value)
                utterance.lang = selectTag[1].value
            }

            speechSynthesis.speak(utterance)
        }
    })
})
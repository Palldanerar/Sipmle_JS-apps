const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".key-checkbox input")

let audio = new Audio("tunes/a.wav")
let allKeys = []

function playTune(key) {
    audio.src = `tunes/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150)
}

function pressedKey(e) {
    console.log(e.key)
    if (allKeys.includes(e.key)) playTune(e.key)
}

function handleVolume(e) {
    audio.volume = e.target.value;
}

function showKeys() {
    pianoKeys.forEach(key => {
        key.classList.toggle("show")
    })
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    key.addEventListener("click", () => {
        playTune(key.dataset.key)
    })
})

document.addEventListener('keydown', pressedKey)
keysCheck.addEventListener("click", showKeys)
volumeSlider.addEventListener("input", handleVolume)
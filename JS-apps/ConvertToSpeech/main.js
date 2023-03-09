const speechBtn = document.querySelector("button"),
voicesList = document.querySelector("select")

let synth = speechSynthesis,
isSpeaking = true

voices()

function voices() {
    for(let voice of synth.getVoices()) {
        let option = `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
        voicesList.insertAdjacentHTML("beforeend", option)
    }
}

synth.addEventListener("voiceschanged", voices)

function textSpeech(text) {
    try {
        let utternance = new SpeechSynthesisUtterance(text)
        for(let voice of synth.getVoices()) {
            if(voice.name === voicesList.value) {
                utternance.voice = voice
            }
        }

        synth.speak(utternance)
    } catch(e) {
        alert(`Error ${e}`)
    }
}

speechBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const textarea = document.querySelector("textarea").value

    if(textarea != "") {
        if(!synth.speaking) {
            textSpeech(textarea)
        }

        if(textarea.length > 80) {
            if(isSpeaking) {
                synth.resume()
                isSpeaking = false
                speechBtn.innerHTML = "Pause Speech"
            } else {
                synth.pause()
                isSpeaking = true
                speechBtn.innerHTML = "Resume Speech"
            }

            setInterval(() => {
                if(!synth.speaking && !isSpeaking) {
                    isSpeaking = true
                    speechBtn.innerHTML = "Convert To Speech"
                }
            })
        } else {
            speechBtn.innerHTML = "Convert To Speech"
        }
    }
})
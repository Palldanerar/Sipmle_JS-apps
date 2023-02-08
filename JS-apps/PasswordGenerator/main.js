const lengthSlider = document.querySelector(".pass-length input")
const generateBtn = document.querySelector(".generate-btn")
const options = document.querySelectorAll(".option input")
const passwordInput = document.querySelector(".input-box input")
const passIndicator = document.querySelector(".pass-indicator")

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#№|[]();:,.*+-<>~"
}

function updateSlider() {
    document.querySelector(".pass-length span").textContent = lengthSlider.value
    generatePassword()
    updatePassIndicator()
}

function updatePassIndicator() {
    passIndicator.id = lengthSlider.value <= 10 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong"
}

function generatePassword() {

    let staticPassword = ""
    let randomPassword = ""
    let excludeDuplicate = false
    let passLenght = lengthSlider.value

    options.forEach(option => {
        if (option.checked) {
            if(option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id]
            } else {
                excludeDuplicate = true
            }
        }
    })

    for (let i = 0; i < passLenght; i++) {
        let randomChar = staticPassword[Math.floor(Math.random()*staticPassword.length)]

        if(excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--
        } else {
            randomPassword += randomChar
        }
    }

    passwordInput.value = randomPassword
}

updateSlider()

lengthSlider.addEventListener("input", updateSlider)
generateBtn.addEventListener("click", generatePassword)
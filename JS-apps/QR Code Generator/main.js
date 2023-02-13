const wrapper = document.querySelector(".wrapper")
const generateBtn = document.querySelector("button")
const qrInput = document.querySelector(".form input")
const qrImg = document.querySelector(".qr-code img")

generateBtn.addEventListener("click", () => {
    wrapper.classList.remove("active")
    let qrValue = qrInput.value;
    if(!qrValue) return
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImg.addEventListener("load", () => wrapper.classList.add("active"))
})

document.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
            wrapper.classList.remove("active")
        let qrValue = qrInput.value;
        if(!qrValue) return
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
        qrImg.addEventListener("load", () => wrapper.classList.add("active"))
    }
})
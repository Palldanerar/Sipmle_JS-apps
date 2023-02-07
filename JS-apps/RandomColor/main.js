function getColor() {
    const colorBox = document.querySelectorAll(".color")

    colorBox.forEach(item => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
    
        item.querySelector(".color-box").style.background = `#${randomColor}`
        item.querySelector(".color-hex").textContent = `#${randomColor}`
    })
}

getColor()

document.querySelector(".btn").addEventListener("click", getColor)
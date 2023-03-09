let rubl = document.querySelector('.rate__rubl')
let select = document.querySelector('.select')
let foreignCurrency = document.querySelector('.foreign__currency')


let valute = 'Dollar'

select.addEventListener('click', () => {
    console.log(select.value)
    valute = select.value

    fetch('сurrency.json')
    .then(date => date.json())
    .then(date => {
        for (let i = 0; i < date.length; i++) {
            if (date[i].name == valute) {
                foreignCurrency.innerHTML = `
                <h1 class="rubl">${date[i].ruName}</h1>
                <input type="number" class="rate__dollar" value=0>
                `
            }
        }
    })
})

rubl.addEventListener('input', (e) => {
    let dollar = document.querySelector('.rate__dollar')
    let amountRubl = e.target.value

    console.log(amountRubl)

    fetch('сurrency.json')
    .then(date => date.json())
    .then(date => {
        for (let i = 0; i < date.length; i++) {
            if (date[i].name == valute) {
                console.log(date[i].rate)
                dollar.value = (amountRubl * date[i].rate).toFixed(2)
            }
        }


    })
})


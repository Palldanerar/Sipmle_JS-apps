const catImg = document.querySelector(".cat");
const catSay = document.querySelector(".cat-say");
const catGif = document.querySelector(".btn")

async function getCat() {
  await fetch("https://cataas.com/cat?width=600&height=350").then((res) => {
    catImg.src = res.url;
  });
}

async function getCatSay(text) {
  await fetch(`https://cataas.com/cat/says/${text}?width=600&height=350`).then(
    (res) => {
      catImg.src = res.url;
    }
  );
}

async function getCatGif() {
    await fetch("https://cataas.com/cat/gif")
    .then(res => {
        catImg.src = res.url;
    })
}

async function getCatSayGif(text) {
    await fetch(`https://cataas.com/cat/gif/says/${text}`).then(
    (res) => {
      catImg.src = res.url;
    }
  );
}

catImg.addEventListener("click", () => {
  if (catSay.value) {
    getCatSay(catSay.value);
  } else {
    getCat();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    if (catSay.value) {
      getCatSay(catSay.value);
    } else {
      getCat()
    }
  }
});

catGif.addEventListener("click", () => {
    if (catSay.value) {
        getCatSayGif(catSay.value)
    } else {
        getCatGif()
    }
    
})

getCat()

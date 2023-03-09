const fileInput = document.querySelector("input");
const downBtn = document.querySelector("button");

function fetchFile(url) {
  fetch(url)
    .then((result) => result.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    })
    .catch((e) => {
      alert(`Ошибка ${e}`);
    });
}

downBtn.addEventListener("click", (e) => {
  e.preventDefault();

  fetchFile(fileInput.value);
});

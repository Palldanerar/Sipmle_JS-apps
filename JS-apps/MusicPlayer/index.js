const song = document.querySelector("#song")
const btnStart = document.querySelector("#start")
const coverSong = document.querySelector(".song-cover")

btnStart.addEventListener("click", () => {
    if (btnStart.classList.contains("bi-stop")) {
        song.pause()
        coverSong.classList.remove("animation")
        btnStart.classList.add("bi-play-circle-fill")
        btnStart.classList.remove("bi-stop")
    } else {
        song.play()
        coverSong.classList.add("animation")
        btnStart.classList.remove("bi-play-circle-fill")
        btnStart.classList.add("bi-stop")
    }
})
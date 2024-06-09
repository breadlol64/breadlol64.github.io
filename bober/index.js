let tg = window.Telegram.WebApp

let name_el = document.getElementById("name")
name_el.innerHTML = tg.initDataUnsafe.user.first_name
tg.expand()

function addScore() {
    let score_el = document.getElementById("score")
    score_el.innerHTML = Number(score_el.innerText) + 1
    
}

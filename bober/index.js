let tg = window.Telegram.WebApp

let name_el = document.getElementById("name")
name_el.innerHTML = tg.initDataUnsafe.user.first_name

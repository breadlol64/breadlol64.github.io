let score_el = document.getElementById("score")
const userid = getCookie("userid")
const username = getCookie("username")
const password = getCookie("password")

fetch(`http://127.0.0.1:6464/user/${username}?password=${password}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // parses JSON response into native JavaScript objects
        })
        .then(data => {
          console.log(data)
          score_el.innerText = data["coins"]
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function addScore() {
    score_el.innerHTML = Number(score_el.innerText) + 1
    fetch(`http://127.0.0.1:6464/setcoins?userid=${userid}&coins=${score_el.innerText}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // parses JSON response into native JavaScript objects
        })
        .then(data => console.log(data))
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

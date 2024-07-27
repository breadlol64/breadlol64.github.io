function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

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

function login() {
    let username = document.getElementById("user").value
    let password = document.getElementById("pw").value
    let status = document.getElementById("status")

    fetch(`http://127.0.0.1:6464/user/${username}?password=${password}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // parses JSON response into native JavaScript objects
        })
        .then(data => {
            console.log(data)
            status.innerText = JSON.stringify(data, null, 4)
            setCookie("username", data["user"], 14)
            setCookie("userid", data["_id"], 14)
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));

}

function reg() {
    
}
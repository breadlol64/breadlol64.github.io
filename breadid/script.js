
function login() {
    // get info
    let username = document.getElementById("us").value
    let passwd = document.getElementById("pw").value

    // send request to server
    fetch(`http://127.0.0.1:8000/user/?username=${username}&pw=${passwd}`, {
        "method": "GET",
        "mode": "cors",
        headers: {
            "Accept": "application/json"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok. code:' + response.status);
            }

        })
        .then(data => {
            // Successful response
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

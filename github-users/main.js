const URL = "https://api.github.com/users/";

async function getUser(username) {
    // Default options are marked with *
    console.log(URL + username);
    const response = await fetch(URL + username, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function searchUser() {
    let username = document.getElementById('user-name').value;
    getUser(username).then(userInfo => {
        appendUserInfo(userInfo);
    })
}

function appendUserInfo(userInfo) {
    document.getElementById('user-photo').width = 200;
    document.getElementById('user-photo').height = 200;
    document.getElementById('user-photo').src = userInfo.avatar_url;
    document.getElementById('name').innerText = userInfo.name;
    document.getElementById('login').innerText = userInfo.login;
    document.getElementById('company').innerText = userInfo.company;
    document.getElementById('bio').innerText = userInfo.bio;
}
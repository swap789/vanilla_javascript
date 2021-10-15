const URL = "https://icanhazdadjoke.com/";

async function getJoke() {
    try {
        const response = await fetch(URL, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Accept': 'application/json'
            }
        });
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}

function randomJoke() {
    getJoke().then(joke => {
        document.getElementById('joke-text').innerText = joke.joke;
        console.log(joke);
    });
}

randomJoke();
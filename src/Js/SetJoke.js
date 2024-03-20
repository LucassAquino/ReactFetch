function SetJoke(){
    const jokeApiURL = "https://geek-jokes.sameerkumar.website/api?format=json"
    return fetch(jokeApiURL)
    .then((response) =>{
        if(!response.ok)
            throw new Error("DEU RUIM!")

        return response.json()
    })
    .then((json) => {
        let joke = json.joke
        let elPiada = document.getElementById("piada")
        elPiada.style.display = "block"
        elPiada.textContent = joke
        setTimeout(() => {elPiada.style.display = "none";}, 20000)
        return joke
    })
    .catch((err) => {console.error(err)})
}

export default SetJoke
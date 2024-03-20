var uuidNameCharacters = {}

function LoadAllCharacters(){
    let charactersURL = "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
    return fetch(charactersURL)
    .then((response) => {
        if(!response.ok)
            throw new Error("Requisição deu erro!")

        return response.json()
    })
    .then((json) => {
        let data = json.data
        data.map((e) => {
            uuidNameCharacters[e.displayName] = e.uuid
        })
        return uuidNameCharacters
    })
    .catch((err) => {
        console.error(err)
    })
}

function GetCharactersObject(){
    return uuidNameCharacters
}

export {LoadAllCharacters, GetCharactersObject}
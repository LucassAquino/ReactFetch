import {GetCharactersObject} from "./LoadAllCharacters"
import { IAgentProps } from "../Components/AgentCard"


function GetSpecificCharacter(name){
    let uuidNameCharacters = GetCharactersObject()
    let uuidSearch = uuidNameCharacters[name]
    var agentProps;

    const charactersURL = `https://valorant-api.com/v1/agents/${uuidSearch}`
    return fetch(charactersURL)
    .then((response) => {
        if(!response.ok)
            throw new Error("Requisição deu erro!")

        return response.json()
    })
    .then((json) => {
        let data = json.data
        let abilities = []
        data.abilities.map((e)=> {
            abilities.push(e.displayName, e.displayIcon)
        })
        agentProps = new IAgentProps(data.displayName, data.fullPortrait, data.description, data.role.displayName, abilities[0], abilities[1], abilities[2], abilities[3], abilities[4], abilities[5], abilities[6], abilities[7])
        return agentProps
    })
    .catch((err) => {
        console.error(err)
    })
}

export default GetSpecificCharacter
import Menu from './Components/Menu'
import './App.css';
import {LoadAllCharacters, GetCharactersObject} from './Js/LoadAllCharacters';
import GetSpecificCharacter from './Js/GetSpecificCharacter';
import {AgentCard} from './Components/AgentCard'
import { useState, useEffect } from 'react';

function App() {
  const [props, setProps] = useState();
  const [selectedOption, setSelectedOption] = useState("Gekko");
  const [objectAgents, setObjectAgents] = useState();
  useEffect(() => {
  let allCharacterPromise = LoadAllCharacters();
  Promise.all([allCharacterPromise])
  .then((e) => { 
    let promiseSpecificCharacter = GetSpecificCharacter(selectedOption) 
    Promise.all([promiseSpecificCharacter]).then(() => {
      promiseSpecificCharacter.then((returnProps) => {
        setProps(returnProps)
        setObjectAgents(GetCharactersObject())
      })
    })
  })
  }, [])

  function GetAgentCard(e){
    let promiseSpecificCharacter = GetSpecificCharacter(e.target.value)
    Promise.all([promiseSpecificCharacter]).then(() => {
      promiseSpecificCharacter.then((returnProps) => {
        setProps(returnProps) 
      })
    })
  }

  return <>{  
    props != null && ( 
    <div>
      <Menu/>
      <div id='selectItensDiv'>
        <label htmlFor='select' id='label'>Selecione um Agente</label>
        <select id='select' name='select' onChange={GetAgentCard}>
          {Object.keys(objectAgents).map((key) => {
            return(
            <option key={key} value={key}>
              {key}
            </option>)}
          )}
        </select>
      </div>
        <AgentCard AgentProps={props}/>  
    </div>)
  }
  </>

}

export default App;

import PowerIcon from "./PowerIcon";
import Styles from "./AgentCard.module.css"

class IAgentProps{
    agent;
    imgAgent;
    description;
    role;
    hab1;
    hab1Img;
    hab2;
    hab2Img;
    hab3;
    hab3Img;
    hab4;
    hab4Img;

    constructor(agent, imgAgent, description, role, hab1, hab1Img, hab2, hab2Img, hab3, hab3Img, hab4, hab4Img){
        this.agent = agent;
        this.imgAgent = imgAgent;
        this.description = description;
        this.role = role;
        this.hab1 = hab1;
        this.hab1Img = hab1Img;
        this.hab2 = hab2;
        this.hab2Img = hab2Img;
        this.hab3 = hab3;
        this.hab3Img = hab3Img;
        this.hab4 = hab4;
        this.hab4Img = hab4Img;
    }
}

function AgentCard({AgentProps}){
    return (
        <div className={Styles.card}>
            <h2>{AgentProps.agent} - {AgentProps.role}</h2>
            <p id="piada"></p>
            <img src={AgentProps.imgAgent} alt={AgentProps.agent} className={Styles.agent_img}/>
            <div className={Styles.abilities}>
            <PowerIcon hab={AgentProps.hab1} habImg={AgentProps.hab1Img}/>
            <PowerIcon hab={AgentProps.hab2} habImg={AgentProps.hab2Img}/>
            <PowerIcon hab={AgentProps.hab3} habImg={AgentProps.hab3Img}/>
            <PowerIcon hab={AgentProps.hab4} habImg={AgentProps.hab4Img}/>
            </div>
        </div>
    )
}


export {AgentCard, IAgentProps}
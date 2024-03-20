import styles from "./Menu.module.css"
import SetJoke from "../Js/SetJoke"

function Menu(){
    return (
        <nav className={styles.nav}>
            <button className={styles.nav_button}>Conheça os agentes</button>
            <h1 className={styles.text_principal}>Valorant Meet Agents</h1>
            <button onClick={SetJoke} className={styles.nav_button}>Faça o personagem contar uma piada em inglês!</button>
        </nav>   
    )
}

export default Menu
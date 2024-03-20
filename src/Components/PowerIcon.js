import Styles from "./PowerIcon.module.css"

function PowerIcon ({hab, habImg}){
    return (
        <figure className={Styles.figure}>
            <img src={habImg} alt={hab}/>
            <figcaption>{hab}</figcaption>
        </figure>
    )
}

export default PowerIcon
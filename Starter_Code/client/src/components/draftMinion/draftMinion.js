import React from "react";
import styles from './draftMinion.css';


function DraftMinion(props) {
    return <div className= {styles.minionCard}>
        <h3 className={styles.minionName}>{props.name}</h3>
        <p className={styles.minionHealth}>{props.health}</p>
        <p className={styles.minionAttack1}>{props.attack1}</p>
        <p className={styles.minionAttack1Cost}>{props.attack1cost}</p>
        <p className={styles.minionAttack1}>{props.attack2}</p>
        <p className={styles.minionAttack2Cost}>{props.attack2cost}</p>
        <p className={styles.minionCost}>{props.playCost}</p>
        <p className={styles.minionWeakness}>{props.weakness}</p>
        <p className={styles.minionStrength}>{props.strength}</p>
        <img className= {styles.minionPortrait} src={props.image} alt="random"></img>
    </div>
  }

  export default DraftMinion;
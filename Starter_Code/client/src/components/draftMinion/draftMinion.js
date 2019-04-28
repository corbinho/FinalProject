import React from "react";
<<<<<<< HEAD
import './DraftMinion.css';


=======

import styles from './draftMinion.css';
>>>>>>> 86ea2dc7b70d84c5a94a65c33c3e83d8be2281c1



function DraftMinion(props) {
<<<<<<< HEAD
    return <div className= "minionCard">
        <h3 className="MinionName">{props.name}</h3>
        <p className="minionHealth">{props.health}</p>
        <p className="minionAttack1">{props.attack1}</p>
        <p className="minionAttack1Cost">{props.attack1cost}</p>
        <p className="minionAttack1">{props.attack2}</p>
        <p className="minionAttack2Cost">{props.attack2cost}</p>
        <p className="minionCost">{props.playCost}</p>
        <p className="minionWeakness">{props.weakness}</p>
        <p className="minionStrength">{props.strength}</p>
        <img className= "minionPortrait" src={props.image} alt=""></img>
=======
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

>>>>>>> 86ea2dc7b70d84c5a94a65c33c3e83d8be2281c1
    </div>
  }

  export default DraftMinion;
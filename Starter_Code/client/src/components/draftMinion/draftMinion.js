import React from "react";

function draftMinion(props) {
    return <div>
        <h3 id="minionName">{props.name}</h3>
        <p id="minionHealth">{props.health}</p>
        <p id="minionattack1">{props.attack1}</p>
        <p id="minionattack1cost">{props.attack1cost}</p>
        <p id="minionattack2">{props.attack2}</p>
        <p id="minionattack2cost">{props.attack2cost}</p>
        <p id="playCost">{props.playCost}</p>
        <p id="weakness">{props.weakness}</p>
        <p id="stength">{props.strength}</p>
        <img id= "minionImage" src={props.image}></img>
    </div>
  }

  export default draftMinion;
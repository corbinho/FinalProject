import React from "react";

function draftChamp(props) {
    return <div>
        <h3 id="champName">{props.name}</h3>
        <p id="champHealth">{props.health}</p>
        <p id="champattack1">{props.attack1}</p>
        <p id="champattack1cost">{props.attack1cost}</p>
        <p id="champattack2">{props.attack2}</p>
        <p id="champattack2cost">{props.attack2cost}</p>
        <p id="weakness">{props.weakness}</p>
        <p id="stength">{props.strength}</p>
        <img id= "champImage" src={props.image}></img>
    </div>
  }

  export default draftChamp;
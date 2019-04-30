import React, { Component } from "react";
import "./App.css";

import DraftMinion from "./components/draftMinion/draftMinion"



class App extends Component {
  render() {
    return (<div>
      <DraftMinion health = "3"></DraftMinion>
      <DraftMinion></DraftMinion>
      </div>
    );
  }
}

export default App;

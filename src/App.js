import React, { Component } from "react";
import "./App.css";
import { Participants } from "./Participants/Participants";
import { Depenses } from "./Depenses/Depenses";

class App extends Component {
  state = {
    participants: [],
    depenses: []
  };

  render() {
    const { participants, depenses } = this.state;

    return (
      <div className="App">
        <Participants
          participants={participants}
          onInscription={inscrit =>
            this.setState({
              participants: [...participants, inscrit]
            })
          }
        />

        <Depenses
          depenses={depenses}
          onDepenser={depense =>
            this.setState({
              depenses: [...depenses, depense]
            })
          }
        />

        <div data-testid="creances">
          <h3>Aucune créance</h3>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { Participants } from "./Participants/Participants";
import { Depenses } from "./Depenses/Depenses";
import { calculerLesCreances } from "./Creances/calculerLesCreances";

class App extends Component {
  state = {
    participants: [],
    depenses: []
  };

  render() {
    const { participants, depenses } = this.state;
    const creances = calculerLesCreances(
      depenses,
      participants
    );

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
          {creances.map((c, i) => (
            <div key={i}>
              {`${c.payeur} doit ${c.montant} euros à ${c.receveur}`}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

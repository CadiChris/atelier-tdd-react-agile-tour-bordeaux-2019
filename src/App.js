import React, { Component } from "react";
import "./App.css";
import { Participants } from "./Participants/Participants";

class App extends Component {
  state = {
    participants: []
  };

  render() {
    const { participants } = this.state;

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

        <div data-testid="depenses">
          <h3>Aucune dépense</h3>
        </div>

        <div data-testid="creances">
          <h3>Aucune créance</h3>
        </div>
      </div>
    );
  }
}

export default App;

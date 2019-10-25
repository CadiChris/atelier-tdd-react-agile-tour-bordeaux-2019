import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div data-testid="participants">
        <h3>Aucun participant</h3>
      </div>

      <div data-testid="depenses">
        <h3>Aucune dépense</h3>
      </div>

      <div data-testid="creances">
        <h3>Aucune créance</h3>
      </div>
    </div>
  );
}

export default App;

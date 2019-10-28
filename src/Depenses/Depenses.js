import React, { Component } from "react";
import * as PropTypes from "prop-types";

export class Depenses extends Component {
  state = {
    payeur: "",
    montant: ""
  };

  render() {
    const { depenses, onDepenser } = this.props;
    const { payeur, montant } = this.state;

    return (
      <div id="depenses" data-testid="depenses">
        <h3>
          {depenses.length === 0 && "Aucune dépense"}
          {depenses.length > 0 &&
            this.getTotalDepense() + " euros dépensés"}
        </h3>

        <ul>
          {depenses.map((depense, i) => (
            <li key={i}>
              {depense.payeur} : {depense.montant} euros
            </li>
          ))}
        </ul>

        <div>
          <label htmlFor="depense-payeur">Payeur</label>
          <input
            type="text"
            id="depense-payeur"
            value={payeur}
            onChange={e =>
              this.setState({ payeur: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="depense-montant">Montant</label>
          <input
            type="text"
            id="depense-montant"
            value={montant}
            onChange={e =>
              this.setState({ montant: e.target.value })
            }
          />
        </div>

        <button
          data-testid="depenser"
          onClick={() => {
            onDepenser({
              payeur,
              montant: Number(montant)
            });
            this.setState({ montant: "", payeur: "" });
          }}
        >
          Dépenser
        </button>
      </div>
    );
  }

  getTotalDepense() {
    const { depenses } = this.props;
    return depenses.reduce(
      (total, depense) => total + depense.montant,
      0
    );
  }
}

Depenses.propTypes = {
  depenses: PropTypes.arrayOf(PropTypes.object),
  onDepenser: PropTypes.func
};

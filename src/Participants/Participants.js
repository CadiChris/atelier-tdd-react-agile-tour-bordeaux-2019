import React, { Component } from "react";
import * as PropTypes from "prop-types";

export class Participants extends Component {
  state = {
    inscrit: ""
  };

  render() {
    const { onInscription, participants } = this.props;

    const { inscrit } = this.state;

    return (
      <div data-testid="participants">
        <h3>
          {participants.length === 0 && "Aucun participant"}
          {participants.length === 1 && "1 participant"}
          {participants.length > 1 &&
            participants.length + " participants"}
        </h3>

        <ul>
          {participants.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <div>
          <input
            type="text"
            data-testid="inscription-nom"
            onChange={event =>
              this.setState({ inscrit: event.target.value })
            }
            value={inscrit}
          />
          <button
            data-testid="inscription"
            onClick={() => {
              onInscription(inscrit);
              this.setState({ inscrit: "" });
            }}
          >
            Inscription
          </button>
        </div>
      </div>
    );
  }
}

Participants.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.string),
  callbackfn: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  onClick: PropTypes.func
};

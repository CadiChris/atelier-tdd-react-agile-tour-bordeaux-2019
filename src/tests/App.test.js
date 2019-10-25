import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import {
  cliquerSur,
  taperAuClavier
} from "./aideAuxTests";

afterEach(cleanup);

describe("<App />", () => {
  it("affiche une ardoise vierge", () => {
    const app = render(<App />);

    const participants = app.getByTestId("participants");
    expect(participants).toHaveTextContent(
      "Aucun participant"
    );

    const depenses = app.getByTestId("depenses");
    expect(depenses).toHaveTextContent("Aucune dépense");

    const creances = app.getByTestId("creances");
    expect(creances).toHaveTextContent("Aucune créance");
  });

  it("inscrit un participant", () => {
    const app = render(<App />);

    inscrire("Jim", app);

    const participants = app.getByTestId("participants");
    expect(participants).toHaveTextContent("1 participant");
    expect(participants).toHaveTextContent("Jim");
    expect(app.getByTestId("inscription-nom")).toHaveValue(
      ""
    );
  });

  it("inscrit plusieurs participants", () => {
    const app = render(<App />);

    inscrire("Pam", app);
    inscrire("Stanley", app);

    const participants = app.getByTestId("participants");
    expect(participants).toHaveTextContent(
      "2 participants"
    );
  });
});

function inscrire(participant, app) {
  const input = app.getByTestId("inscription-nom");
  taperAuClavier(participant, input);

  const inscription = app.getByTestId("inscription");
  cliquerSur(inscription);
}

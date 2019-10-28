import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { cliquerSur, taperAuClavier } from "./aideAuxTests";

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
    expectVide(app.getByTestId("inscription-nom"));
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

  it("ajoute une nouvelle dépense", () => {
    const app = render(<App />);

    depenser("Jim", "100", app);
    depenser("Pam", "70", app);

    const depenses = app.getByTestId("depenses");
    expect(depenses).toHaveTextContent(
      "170 euros dépensés"
    );
    expect(depenses).toHaveTextContent("Jim : 100 euros");
    expect(depenses).toHaveTextContent("Pam : 70 euros");
    expectVide(app.getByLabelText("Montant"));
    expectVide(app.getByLabelText("Payeur"));
  });

  it("affiche les créances", () => {
    const app = render(<App />);

    inscrire("Jim", app);
    inscrire("Pam", app);
    depenser("Pam", 100, app);

    const creances = app.getByTestId("creances");
    expect(creances).toHaveTextContent(
      "Jim doit 50 euros à Pam"
    );
  });
});

function inscrire(participant, app) {
  const input = app.getByTestId("inscription-nom");
  taperAuClavier(participant, input);

  const inscription = app.getByTestId("inscription");
  cliquerSur(inscription);
}

function depenser(payeur, montant, app) {
  taperAuClavier(payeur, app.getByLabelText("Payeur"));
  taperAuClavier(montant, app.getByLabelText("Montant"));
  cliquerSur(app.getByTestId("depenser"));
}

function expectVide(element) {
  expect(element).toHaveValue("");
}

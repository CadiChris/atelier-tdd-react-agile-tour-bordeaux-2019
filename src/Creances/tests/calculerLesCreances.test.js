import { calculerLesCreances } from "../calculerLesCreances";

it("si pas de dépenses, pas de créance", () => {
  const aucuneDepense = [];
  const creances = calculerLesCreances(aucuneDepense);
  expect(creances).toEqual([]);
});

it("calcule une créance pour une dépense entre 2 participants", () => {
  const uneDepense = { payeur: "Pam", montant: 100 };

  const creances = calculerLesCreances(
    [uneDepense],
    ["Jim", "Pam"]
  );

  expect(creances).toEqual([
    { payeur: "Jim", receveur: "Pam", montant: 50 }
  ]);
});

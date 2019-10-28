export function calculerLesCreances(
  depenses,
  participants
) {
  if (depenses.length === 0) return [];

  const payeurDeLaDepense = depenses[0].payeur;
  const celuiQuiNaPasPaye = participants.find(
    p => p !== payeurDeLaDepense
  );
  const montantDuRemboursement = depenses[0].montant / 2;

  return [
    {
      payeur: celuiQuiNaPasPaye,
      receveur: payeurDeLaDepense,
      montant: montantDuRemboursement
    }
  ];
}

import { fireEvent } from "@testing-library/dom";

export function taperAuClavier(texte, cible) {
  fireEvent.change(cible, {
    target: { value: texte }
  });
}

export function cliquerSur(inscription) {
  fireEvent.click(inscription);
}

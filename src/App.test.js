import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

it("peut exécuter du testing-library", () => {
  const app = render(<App />);

  expect(app.container).toHaveTextContent("Ardoise");
});

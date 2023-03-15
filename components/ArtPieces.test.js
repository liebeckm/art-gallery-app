import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

test("renders all art pieces as a list", () => {
  render(<ArtPieces />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

import { screen, render } from "@testing-library/react";
import ArtPiecesPreview from "./ArtPiecesPreview";

test("render image of each art piece", () => {
  render(<ArtPiecesPreview />);
  const image = screen.getByRole("image");
  expect(image).toBeInTheDocument();
});

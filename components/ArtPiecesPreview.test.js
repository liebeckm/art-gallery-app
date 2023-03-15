import { screen, render } from "@testing-library/react";
import ArtPiecesPreview from "./ArtPiecesPreview";

test("render image of each art piece", () => {
  render(
    <ArtPiecesPreview imageSource="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg" />
  );
  const image = screen.getByRole("image");
  expect(image).toBeInTheDocument();
});

test("render titel", () => {
  render(
    <ArtPiecesPreview
      imageSource="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      title="Orange Red and Green"
    />
  );
  const title = screen.getByRole("heading", { name: "Orange Red and Green" });
  expect(title).toBeInTheDocument();
});

test("render artist name", () => {
  render(
    <ArtPiecesPreview
      imageSource="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      artist="Steve Johnson"
    />
  );
  const title = screen.getByRole("heading", { name: "Steve Johnson" });
  expect(title).toBeInTheDocument();
});

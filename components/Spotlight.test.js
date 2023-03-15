import { screen, render } from "@testing-library/react";
import Spotlight from "./Spotlight";

const random = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  dimensions: {
    height: 2432,
    width: 1920,
    type: "jpg",
  },
};

test("if spotlight image is being rendered", () => {
  render(<Spotlight random={random} />);
  const image = screen.getByRole("image");
  expect(image).toBeInTheDocument();
});

test("if artist name is being rendered", () => {
  render(<Spotlight random={random} />);
  const artist = screen.getByRole("heading", { name: "Steve Johnson" });
  expect(artist).toBeInTheDocument();
});

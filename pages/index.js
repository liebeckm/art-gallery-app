import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

import Spotlight from "../components/Spotlight";

export default function HomePage() {
  const { data, isLoading } = useSWR("https://example-apis.vercel.app/api/art");
  if (isLoading) return <p>...is Loading</p>;

  const randomNumber = Math.floor(Math.random() * 12);
  const randomArtPiece = data[randomNumber];

  return (
    <div>
      <Spotlight random={randomArtPiece} />
      <ArtPieces pieces={data} />
    </div>
  );
}

import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

export default function HomePage() {
  const { data, isLoading } = useSWR("https://example-apis.vercel.app/api/art");

  if (isLoading) return <p>...is Loading</p>;

  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}

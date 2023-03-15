import Image from "next/image";

export default function ArtPiecesPreview({
  key,
  imageSource,
  name,
  artist,
  width,
  height,
}) {
  console.log(imageSource);
  return (
    <li key={key}>
      <Image
        alt="image of artpiece"
        src={imageSource}
        width={500}
        height={500}
      />
      <h2>{name}</h2>
      <p>{artist}</p>
    </li>
  );
}

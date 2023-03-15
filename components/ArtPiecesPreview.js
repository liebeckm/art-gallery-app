import Image from "next/image";

export default function ArtPiecesPreview({ key, imageSource, name, artist }) {
  console.log("key", key);

  return (
    <li key={key}>
      <Image
        key={key}
        role="image"
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

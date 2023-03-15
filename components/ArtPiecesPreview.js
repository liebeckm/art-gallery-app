import Image from "next/image";

export default function ArtPiecesPreview({ imageSource, title, artist }) {
  return (
    <>
      <Image
        role="image"
        alt="image of artpiece"
        src={imageSource}
        width={500}
        height={500}
      />
      <h2>{title}</h2>
      <h3>{artist}</h3>
    </>
  );
}

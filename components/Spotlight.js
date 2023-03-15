import Image from "next/image";

export default function Spotlight({ random }) {
  return (
    <>
      <Image
        role="image"
        src={random.imageSource}
        alt={`Artpiece with the title ${random.name}`}
        width={1000}
        height={1000}
      />
      <h3>{random.artist}</h3>
    </>
  );
}

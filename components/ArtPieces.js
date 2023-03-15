import React from "react";
import ArtPiecesPreview from "./ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  console.log("slug:", pieces);
  return (
    <ul>
      {pieces?.map(({ slug, imageSource, artist, name }) => (
        <ArtPiecesPreview
          key={slug}
          imageSource={imageSource}
          name={name}
          artist={artist}
        />
      ))}
    </ul>
  );
}

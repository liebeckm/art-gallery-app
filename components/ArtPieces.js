import React from "react";
import ArtPiecesPreview from "./ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  console.log("slug:", pieces);
  return (
    <ul>
      {pieces?.map(({ slug, imageSource, artist, name }) => (
        <li key={slug}>
          <ArtPiecesPreview
            imageSource={imageSource}
            title={name}
            artist={artist}
          />
        </li>
      ))}
    </ul>
  );
}

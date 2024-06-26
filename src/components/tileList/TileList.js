import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile 
          key={index}
          name={tile.name || tile.title} 
          description={tile}
        />
      ))}
    </div>
  );
};

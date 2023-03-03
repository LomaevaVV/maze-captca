import React from 'react';

type CellsRowProps = {
  cells: number[][];
}

export default function CellsRow({cells}: CellsRowProps): JSX.Element {

  return (
    <div>
      {cells.map((item) => (
        <div key={`${item[0]}, ${item[1]}`}>
          {`${item[0]}, ${item[1]}`}
        </div>
      ))}
    </div>
  );
}

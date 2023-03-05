import React from 'react';

type CellsRowProps = {
  cells: number[][];
}

export default function CellsRow({cells}: CellsRowProps): JSX.Element {

  return (
    <div className='maze__row'>
      {cells.map((item) => (
        <div
          className='maze__cell'
          key={`${item[0]}, ${item[1]}`}
        >

        </div>
      ))}
    </div>
  );
}

import React from 'react';
import CellsRow from '../../components/cells-row/cells-row';
import Header from '../../components/header/header';
import { DEFAULT_MAZE_SIZE } from '../../const';
import { сoordinates } from '../../utils';

export default function MazePage(): JSX.Element {

  const cellsCoordinates = сoordinates(DEFAULT_MAZE_SIZE);
  window.console.log(cellsCoordinates);

  return (
    <React.Fragment>
      <Header />

      <main className="page-main">
        <div className="page-main__wrapper wrapper">
          <h1 className="page-main__title title">Лабиринт</h1>
          <div className="page-main__maze maze">
            {cellsCoordinates.map((item) => (
              <CellsRow
                key={item[0][0]}
                cells={item}
              />)
            )}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

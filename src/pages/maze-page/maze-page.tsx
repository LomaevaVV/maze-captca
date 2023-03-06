import React from 'react';
import CellsRow from '../../components/cells-row/cells-row';
import Header from '../../components/header/header';
import { DEFAULT_MAZE_SIZE } from '../../const';
import { сoordinates, сoordinatesOfPath } from '../../utils';
import { useAppDispatch } from '../../hooks/index';
import { setMazePathCoord } from '../../store/action';
import PathOfArrows from '../../components/path/path';

export default function MazePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cellsCoordinates = сoordinates(DEFAULT_MAZE_SIZE);

  const coordinatesPathArr: number[][] = сoordinatesOfPath(DEFAULT_MAZE_SIZE);
  dispatch(setMazePathCoord(coordinatesPathArr));

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
            <PathOfArrows />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

import CellsRow from '../../components/cells-row/cells-row';
import Header from '../../components/header/header';
import { DEFAULT_MAZE_SIZE } from '../../const';
import { сoordinates } from '../../utils';

export default function MazePage(): JSX.Element {

  const cellsCoordinates = сoordinates(DEFAULT_MAZE_SIZE);
  window.console.log(cellsCoordinates);

  return (
    <div className="">
      <Header />

      <main className="">
        <div className="">
          {cellsCoordinates.map((item) => (
            <CellsRow
              key={item[0][0]}
              cells={item}
            />)
          )}
        </div>
      </main>
    </div>
  );
}

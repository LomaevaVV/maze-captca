import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { setFinishCell } from '../../store/action';

type CellsRowProps = {
  cells: number[][];
}

export default function CellsRow({cells}: CellsRowProps): JSX.Element {
  const dispatch = useAppDispatch();
  const mazeWayCoord = useAppSelector((state) => state.mazeWayCoord);
  const finishCell = useAppSelector((state) => state.finishCell);
  window.console.log(mazeWayCoord[mazeWayCoord.length - 1]);

  const isStartCell = (item: number[]) => mazeWayCoord[0][0] === item[0] && mazeWayCoord[0][1] === item[1] ? 'cell--start' : '';
  const isFinishCell = (item: number[]) => finishCell[0] === item[0] && finishCell[1] === item[1] ? 'cell--finish' : '';

  const onCellClickHandler = (item: number[]) => {
    if (mazeWayCoord[mazeWayCoord.length - 1][0] === item[0] && mazeWayCoord[mazeWayCoord.length - 1][1] === item[1]) {
      dispatch(setFinishCell(mazeWayCoord[mazeWayCoord.length - 1]));
    }
  };

  return (
    <div className='maze__row'>
      {cells.map((item) => (
        <div
          className={`maze__cell cell ${isStartCell(item)} ${isFinishCell(item)}`}
          key={`${item[0]}, ${item[1]}`}
          onClick={() => onCellClickHandler(item)}
        >

        </div>
      ))}
    </div>
  );
}

import { ModalState } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeModalState, changePathIsActive, setFinishCell } from '../../store/action';

type CellsRowProps = {
  cells: number[][];
  mazeIsActive: boolean;
}

export default function CellsRow({cells, mazeIsActive}: CellsRowProps): JSX.Element {
  const dispatch = useAppDispatch();
  const mazePathCoord = useAppSelector((state) => state.mazePathCoord);
  const finishCell = useAppSelector((state) => state.finishCell);
  const pathIsActive = useAppSelector((state) => state.pathIsActive);

  const isStartCell = (item: number[]) =>
    mazePathCoord.length > 0
    && mazePathCoord[0][0] === item[0]
    && mazePathCoord[0][1] === item[1]
    && mazeIsActive === true
      ? 'cell--start'
      : '';

  const isFinishCell = (item: number[]) => finishCell[0] === item[0] && finishCell[1] === item[1] ? 'cell--finish' : '';

  const isInPathCell = (item: number[]) =>
    mazePathCoord.length > 0
    && pathIsActive === true
    && [...mazePathCoord].filter((cellCoord) => cellCoord[0] === item[0] && cellCoord[1] === item[1]).length > 0
      ? 'cell--in-path'
      : '';

  const onCellClickHandler = (item: number[]) => {
    dispatch(setFinishCell(mazePathCoord[mazePathCoord.length - 1]));
    dispatch(changePathIsActive(true));
    if (mazePathCoord[mazePathCoord.length - 1][0] !== item[0]
        || mazePathCoord[mazePathCoord.length - 1][1] !== item[1]) {
      dispatch(changeModalState(ModalState.MazeError));
    }
  };

  return (
    <div className='maze__row'>
      {cells.map((item) => (
        <div
          className={`maze__cell cell ${isStartCell(item)} ${isFinishCell(item)} ${isInPathCell(item)}`}
          key={`${item[0]}, ${item[1]}`}
          onClick={() => onCellClickHandler(item)}
        >

        </div>
      ))}
    </div>
  );
}

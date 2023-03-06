import { ArrowDirection } from '../../const';
import { useAppSelector } from '../../hooks/index';

export default function PathOfArrows(): JSX.Element {
  const mazePathCoord = useAppSelector((state) => state.mazePathCoord);

  return (
    <div className='maze__arrow arrow'>
      {mazePathCoord.map((item, idx) => {
        const index = idx;
        let arrowDirection = '';

        if (idx + 1 <= mazePathCoord.length - 1 && mazePathCoord[idx + 1][0] === item[0]) {
          mazePathCoord[idx + 1][1] - item[1] > 0
            ? arrowDirection = ArrowDirection.Right
            : arrowDirection = ArrowDirection.Left;
        }

        if (idx + 1 <= mazePathCoord.length - 1 && mazePathCoord[idx + 1][1] === item[1]) {
          mazePathCoord[idx + 1][0] - item[0] > 0
            ? arrowDirection = ArrowDirection.Down
            : arrowDirection = ArrowDirection.Up;
        }

        return (
          <div
            className={`arrow ${arrowDirection}`}
            key={`${item[0]}, ${item[1]}, ${index}`}
          >
          </div>);
      })}
    </div>
  );
}

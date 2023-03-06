import { ArrowDirection } from '../../const';
import { useAppSelector } from '../../hooks/index';

export default function PathOfArrows(): JSX.Element {
  const mazeWayCoord = useAppSelector((state) => state.mazeWayCoord);

  window.console.log(mazeWayCoord);

  return (
    <div className='maze__arrow arrow'>
      {mazeWayCoord.map((item, idx) => {
        const index = idx;
        let arrowDirection = '';

        if (idx + 1 <= mazeWayCoord.length - 1 && mazeWayCoord[idx + 1][0] === item[0]) {
          mazeWayCoord[idx + 1][1] - item[1] > 0
            ? arrowDirection = ArrowDirection.Right
            : arrowDirection = ArrowDirection.Left;
        }

        if (idx + 1 <= mazeWayCoord.length - 1 && mazeWayCoord[idx + 1][1] === item[1]) {
          mazeWayCoord[idx + 1][0] - item[0] > 0
            ? arrowDirection = ArrowDirection.Down
            : arrowDirection = ArrowDirection.Up;
        }

        window.console.log(`arrow ${idx}`, arrowDirection, );

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

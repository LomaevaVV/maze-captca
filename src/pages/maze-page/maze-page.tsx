import React, { useEffect, useRef } from 'react';
import CellsRow from '../../components/cells-row/cells-row';
import Header from '../../components/header/header';
import { AppRoute, DEFAULT_MAZE_SIZE, ModalState } from '../../const';
import { сoordinates } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import PathOfArrows from '../../components/path/path';
import Modal from '../../components/modal/modal';
import { changeModalState } from '../../store/action';

export default function MazePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const cellsCoordinates = сoordinates(DEFAULT_MAZE_SIZE);
  const modalState = useAppSelector((state) => state.modalState);
  const mazeIsActive = useAppSelector((state) => state.mazeIsActive);
  window.console.log(modalState);

  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isRenderedRef.current) {
      dispatch(changeModalState(ModalState.MazeStart));
      isRenderedRef.current = true;
    }
  }, );

  return (
    <React.Fragment>
      <Header page={AppRoute.Maze}/>

      <main className="page-main">
        <div className="page-main__wrapper wrapper">
          <h1 className="page-main__title title">Лабиринт</h1>
          <div className="page-main__maze maze">
            {cellsCoordinates.map((item) => (
              <CellsRow
                key={item[0][0]}
                cells={item}
                mazeIsActive={mazeIsActive}
              />)
            )}
            {mazeIsActive === true && <PathOfArrows />}
          </div>
        </div>
        {modalState !== ModalState.Closed && <Modal modalState={modalState}/>}
      </main>
    </React.Fragment>
  );
}

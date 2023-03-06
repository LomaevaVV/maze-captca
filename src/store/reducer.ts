import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_MAZE_SIZE, ModalState } from '../const';
import { setFinishCell, setMazeSize, setMazePathCoord, changeModalState, changeMazeIsActive, changePathIsActive } from './action';

type DataBonus = {
  mazeSize: number;
  mazePathCoord: number[][];
  finishCell: number[];
  modalState: string;
  mazeIsActive: boolean;
  pathIsActive: boolean;
};

const initialState: DataBonus = {
  mazeSize: DEFAULT_MAZE_SIZE,
  mazePathCoord: [],
  finishCell: [],
  modalState: ModalState.Closed,
  mazeIsActive: false,
  pathIsActive: false
};

export const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(setMazeSize, (state, action) => {
        state.mazeSize = action.payload;
      })
      .addCase(setMazePathCoord, (state, {payload}) => {
        state.mazePathCoord = payload;
      })
      .addCase(setFinishCell, (state, {payload}) => {
        state.finishCell = payload;
      })
      .addCase(changeModalState, (state, action: {payload: string}) => {
        state.modalState = action.payload;
      })
      .addCase(changeMazeIsActive, (state, action: {payload: boolean}) => {
        state.mazeIsActive = action.payload;
      })
      .addCase(changePathIsActive, (state, action: {payload: boolean}) => {
        state.pathIsActive = action.payload;
      });
  }
);

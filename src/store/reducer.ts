import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_MAZE_SIZE } from '../const';
import { setFinishCell, setMazeSize, setMazePathCoord } from './action';

type DataBonus = {
  mazeSize: number;
  mazeWayCoord: number[][];
  finishCell: number[];
};

const initialState: DataBonus = {
  mazeSize: DEFAULT_MAZE_SIZE,
  mazeWayCoord: [],
  finishCell: []
};

export const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(setMazeSize, (state, action) => {
        state.mazeSize = action.payload;
      })
      .addCase(setMazePathCoord, (state, {payload}) => {
        state.mazeWayCoord = payload;
      })
      .addCase(setFinishCell, (state, {payload}) => {
        state.finishCell = payload;
      });
  }
);

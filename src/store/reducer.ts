import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_MAZE_SIZE } from '../const';
import { setMazeSize } from './action';

type DataBonus = {
  mazeSize: number;
};

const initialState: DataBonus = {
  mazeSize: DEFAULT_MAZE_SIZE
};

export const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(setMazeSize, (state, action) => {
        state.mazeSize = action.payload;
      });
  }
);

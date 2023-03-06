import { createAction } from '@reduxjs/toolkit';

export const setMazeSize = createAction('maze/setMazeSize', (value: number) => ({
  payload: value
}));

export const setMazePathCoord = createAction('maze/setMazePathCoord', (value: number[][]) => ({
  payload: value
}));

export const setFinishCell = createAction('maze/setFinishCell', (value: number[]) => ({
  payload: value
}));

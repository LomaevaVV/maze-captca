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

export const changeModalState = createAction('maze/changeModalState', (value: string) => ({
  payload: value
}));

export const changeMazeIsActive = createAction('maze/changeMazeIsActive', (value: boolean) => ({
  payload: value
}));

export const changePathIsActive = createAction('maze/changePathIsActive', (value: boolean) => ({
  payload: value
}));

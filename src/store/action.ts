import { createAction } from '@reduxjs/toolkit';

export const setMazeSize = createAction('maze/setMazeSize', (value: number) => ({
  payload: value
}));

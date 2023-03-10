export const DEFAULT_MAZE_SIZE = 3;

export enum AppRoute {
  Main = '/',
  Maze = '/maze',
  BracketsBalance = '/bracketsBalance'
}

export enum ArrowDirection {
  Up = 'arrow--up',
  Down = 'arrow--down',
  Right = 'arrow--right',
  Left = 'arrow--left',
}

export enum ModalState {
  Closed = 'closed',
  MazeStart = 'mazeStart',
  MazeError = 'mazeError',
  MazeSuccess = 'basketDelItem',
  BracketsBalanceError = 'basketSuccess',
  BracketsBalanceSuccess = 'orderSuccess'
}

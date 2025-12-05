export type CellType = {
  isOpen: Boolean;
  isMine: Boolean;
  isFlagged: Boolean;
  isPlosion?: Boolean;
  neighborMines?: number;
};

export type BoardType = {
  label: string;
  r: number;
  c: number;
  m: number;
};

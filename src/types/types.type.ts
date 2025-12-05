export type CellType = {
  isOpen: Boolean;
  isMine: Boolean;
  isFlagged: boolean;
  neighborMines?: number;
};

export type BoardType = {
  label: string;
  r: number;
  c: number;
  m: number;
};



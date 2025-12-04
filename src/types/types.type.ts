export type CellType = {
  isOpen: Boolean;
  isMine: Boolean;
  isFlagged: boolean;
  neighborMines?: number;
};

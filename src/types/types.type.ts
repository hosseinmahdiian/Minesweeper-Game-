export type CellType = {
  isOpen: Boolean;
  isMine: Boolean;
  isFlagged: Boolean;
  isPlosion?: Boolean;
  neighborMines?: number;
};

export type MinesWeeperType = {
  disk: CellType[][] | null | undefined;
  lose: Boolean;
  win: Boolean;
  flags: number;
  time: number;
  click: (pos: [number, number]) => void;
  end: () => void;
  start: (pos: [number, number]) => void;
  restart: () => void;
  flag: (pos: [number, number]) => void;
};

export type BoardType = {
  label: string;
  r: number;
  c: number;
  m: number;
};

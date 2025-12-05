import { Neighbors } from "@/constants/constants";
import { CellType } from "@/types/types.type";

export const generateDisk = (
  r: number,
  c: number,
  m: number,
  start?: [number, number] | false
) => {
  const disk = Array.from({ length: r }, () =>
    Array.from({ length: c }, () => ({
      isOpen: false,
      isMine: false,
      isFlagged: false,
      isPlosion: false,
      neighborMines: 0,
    }))
  );

  if (start) {
    const [startRow, startCol] = start;
    disk[startRow][startCol].isOpen = true;
  }

  planMines(m, r, c, disk, start);

  disk?.map((rows, i) =>
    rows?.map((cell, j) => {
      if (!cell.isMine) {
        cell.neighborMines = countNeighbors(disk, i, j);
      }
    })
  );

  return disk;
};

export const planMines = (
  m: number,
  r: number,
  c: number,
  disk: CellType[][],
  start?: [number, number] | false
) => {
  let planed = 0;
  while (planed < m) {
    const coll = Math.floor(Math.random() * c);
    const row = Math.floor(Math.random() * r);
    // console.log(row, coll);

    if (
      !disk[row][coll].isMine &&
      !!start &&
      !(start?.[0] === row && start?.[1] === coll)
    ) {
      disk[row][coll].isMine = true;
      planed++;
    }
  }
};

export const countNeighbors = (disk: CellType[][], r: number, c: number) => {
  let count = 0;
  for (const [dr, dc] of Neighbors) {
    const nr = r + dr;
    const nc = c + dc;

    if (nr >= 0 && nr < disk.length && nc >= 0 && nc < disk[0].length) {
      if (disk[nr][nc].isMine) count++;
    }
  }
  return count;
};

export const openNeighbors = (disk: CellType[][], r: number, c: number) => {
  let count = 0;
  for (const [dr, dc] of Neighbors) {
    const nr = r + dr;
    const nc = c + dc;

    if (disk[nr] && disk[nr][nc]) {
      const cell = disk[nr][nc];
      if (!cell.isOpen && !cell.isMine && !cell.isFlagged) {
        cell.isOpen = true;
        if (cell.neighborMines == 0) openNeighbors(disk, nr, nc);
      }
    }
  }
  return count;
};

export const playAudio = (path: string) => {
  const audio = new Audio(path);
  audio.play();
};

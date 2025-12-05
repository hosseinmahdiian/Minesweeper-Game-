import { CellType } from "@/types/types.type";
import Cell from "./cell";

interface MinesWeeperProps {
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
}

interface DiskProps {
  minesWeeper: MinesWeeperProps;
  board: { r: number; c: number; m: number; label: string };
}

const Disk = ({ minesWeeper, board }: DiskProps) => {
  const { click, start, flag } = minesWeeper;
  let timer: any;
  return (
    <div className=" grid gap-1 w-fit mx-auto overflow-scroll ">
      {!!minesWeeper?.disk
        ? minesWeeper?.disk?.map((rows, i) => (
            <div className="flex gap-1" key={`${i}`}>
              {rows?.map((cell, j) => (
                <Cell
                  key={`${i}-${j}`}
                  item={cell}
                  onClick={() => click([i, j])}
                  onContextMenu={() => flag([i, j])}
                  onDoubleClick={() => flag([i, j])}
                  onTouchStart={() => {
                    timer = setTimeout(() => {
                      flag([i, j]);
                    }, 500);
                  }}
                  onTouchEnd={() => {
                    clearTimeout(timer);
                  }}
                />
              ))}
            </div>
          ))
        : Array.from({ length: board.r })?.map((_, i) => (
            <div className="flex gap-1" key={`${i}`}>
              {Array.from({ length: board.c })?.map((_, j) => (
                <Cell key={`${i}-${j}`} onClick={() => start([i, j])} />
              ))}
            </div>
          ))}
    </div>
  );
};

export default Disk;

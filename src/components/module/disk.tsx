"use client";
import { useMinesWeeper } from "@/hooks/useMinesWeeper";
import Cell from "./cell";

const Disk = ({ r, c, m }: { r: number; c: number; m: number }) => {
  const MinesWeeper = useMinesWeeper(r, c, m);
  const { disk, lose, win, flags, time, click, end, start, restart, flag } =
    MinesWeeper;

  return (
    <div className=" grid gap-1 w-fit mx-auto">
      {disk
        ? disk?.map((rows, i) => (
            <div className="flex gap-1" key={`${i}`}>
              {rows?.map((cell, j) => (
                <Cell
                  key={`${i}-${j}`}
                  item={cell}
                  onClick={() => click([i, j])}
                  onContextMenu={() => flag([i, j])}
                  onDoubleClick={() => flag([i, j])}
                />
              ))}
            </div>
          ))
        : Array.from({ length: r })?.map((_, i) => (
            <div className="flex gap-1" key={`${i}`}>
              {Array.from({ length: c })?.map((_, j) => (
                <Cell key={`${i}-${j}`} onClick={() => start([i, j])} />
              ))}
            </div>
          ))}

      <button onClick={() => restart()}>restart</button>
      <button onClick={() => end()}>end</button>
      <h2>{time}</h2>
    </div>
  );
};

export default Disk;

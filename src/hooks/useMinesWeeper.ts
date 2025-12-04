"use client";
import { generateDisk, openNeighbors, planMines } from "@/functions/functions";
import { CellType } from "@/types/types.type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useMinesWeeper = (rows: number, cols: number, m: number) => {
  const [time, setTime] = useState<number>(0);
  const [flags, setFlags] = useState<number>(m);
  const [win, setWin] = useState<Boolean>(false);
  const [lose, setLose] = useState<Boolean>(false);
  const [started, setStarted] = useState<Boolean>(false);
  const [disk, setDisk] = useState<CellType[][] | null>();
  const [cellStarted, setCellStarted] = useState<[number, number] | false>(
    false
  );

  const start = ([r, c]: [number, number]) => {
    setCellStarted([r, c]);
    setStarted(true);
    setWin(false);
    setLose(false);
  };

  const end = () => {
    setCellStarted(false);
    setStarted(false);
    setLose(false);
    setWin(false);
    setTime(0);
  };

  const restart = () => {
    setCellStarted(false);
    setStarted(false);
    setLose(false);
    setWin(false);
    setDisk(null);
    setTime(0);
  };

  const flag = ([r, c]: [number, number]) => {
    if (!lose && !win && flags > 0) {
      setDisk((prevDisk) => {
        console.log("flag");
        if (!!prevDisk) {
          const copy = prevDisk.map((row) => row.map((cell) => ({ ...cell })));
          if (copy[r][c].isOpen) return copy;
          copy[r][c].isFlagged
            ? setFlags((flags) => flags++)
            : setFlags((flags) => flags--);

          copy[r][c].isFlagged = !copy[r][c].isFlagged;
          return copy;
        }
      });
    }
  };

  const click = ([r, c]: [number, number]) => {
    if (!lose && !win) {
      console.log(lose, win);
      setDisk((prevDisk) => {
        if (!!prevDisk) {
          const copy = prevDisk.map((row) => row.map((cell) => ({ ...cell })));

          //opened or flagged
          if (copy[r][c].isOpen || copy[r][c].isFlagged) return copy;

          // lose
          if (copy[r][c].isMine) {
            console.log("lose the game");
            copy[r][c].isOpen = true;

            copy.forEach((row) =>
              row.forEach((cell) => cell.isMine && (cell.isOpen = true))
            );
            toast.error("you lose");
            setLose(true);
            return copy;
          }

          // click
          copy[r][c].isOpen = true;
          copy[r][c].neighborMines === 0 && openNeighbors(copy, r, c);

          //wine
          let cellOpen: number = 0;
          copy.map((row) =>
            row.map((cell) => cell.isOpen && !cell.isMine && cellOpen++)
          );
          if (cellOpen == rows * cols - m) {
            toast.success("you wine");
            setWin(true);
          }

          return copy;
        }
      });
    }
  };

  useEffect(() => {
    if (started && cellStarted) {
      const newDisk = generateDisk(rows, cols, m, cellStarted);
      openNeighbors(newDisk, cellStarted[0], cellStarted[1]);
      setDisk(newDisk);

      //wine
      const copy = newDisk.map((row) => row.map((cell) => ({ ...cell })));
      let cellOpen: number = 0;
      copy.map((row) =>
        row.map((cell) => cell.isOpen && !cell.isMine && cellOpen++)
      );
      if (cellOpen == rows * cols - m) {
        toast.success("you wine");
        setWin(true);
      }
    } else {
      setDisk(null);
    }
    return () => {
      setDisk(null);
    };
  }, [rows, cols, m, started]);

  useEffect(() => {
    let timer: number;

    if (started && !lose && !win) {
      timer = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [started, lose, win]);

  return { disk, lose, win, flags, time, click, end, start, restart, flag };
};

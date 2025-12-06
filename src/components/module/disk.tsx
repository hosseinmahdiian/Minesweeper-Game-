"use client";
import { MinesWeeperType } from "@/types/types.type";
import Cell from "./cell";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { useEffect, useRef, useState } from "react";

interface DiskProps {
  minesWeeper: MinesWeeperType;
  board: { r: number; c: number; m: number; label: string };
}

const Disk = ({ minesWeeper, board }: DiskProps) => {
  const { click, start, flag } = minesWeeper;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScroll, setCanScroll] = useState({
    top: false,
    bottom: false,
    left: false,
    right: false,
  });

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const {
      scrollTop,
      scrollLeft,
      scrollHeight,
      scrollWidth,
      clientHeight,
      clientWidth,
    } = el;

    setCanScroll({
      top: scrollTop > 5,
      bottom: scrollTop + clientHeight < scrollHeight - 5,
      left: scrollLeft > 5,
      right: scrollLeft + clientWidth < scrollWidth - 5,
    });
  };

  const scrollByDir = (dir: "up" | "down" | "left" | "right") => {
    if (!scrollRef.current) return;
    const step = 150;

    if (dir === "up") scrollRef.current.scrollTop -= step;
    if (dir === "down") scrollRef.current.scrollTop += step;
    if (dir === "left") scrollRef.current.scrollLeft -= step;
    if (dir === "right") scrollRef.current.scrollLeft += step;
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="relative w-full h-fit overflow-hidden">
      {canScroll.left && (
        <IoIosArrowBack
          onClick={() => scrollByDir("left")}
          className="absolute left-1 inset-y-0 my-auto text-3xl z-20 cursor-pointer bg-black/10 text-white rounded-full p-1"
        />
      )}

      {canScroll.right && (
        <IoIosArrowForward
          onClick={() => scrollByDir("right")}
          className="absolute right-1 inset-y-0 my-auto text-3xl z-20 cursor-pointer bg-black/10 text-white rounded-full p-1"
        />
      )}

      {canScroll.top && (
        <IoIosArrowUp
          onClick={() => scrollByDir("up")}
          className="absolute top-1 inset-x-0 mx-auto text-3xl z-20 cursor-pointer bg-black/10 text-white rounded-full p-1"
        />
      )}

      {canScroll.bottom && (
        <IoIosArrowDown
          onClick={() => scrollByDir("down")}
          className="absolute bottom-1 inset-x-0 mx-auto text-3xl z-20 cursor-pointer bg-black/10 text-white rounded-full p-1"
        />
      )}

      <div
        ref={scrollRef}
        className="w-full h-full overflow-scroll scroll-smooth hide-scrollbar"
      >
        <div className="grid gap-1 w-fit h-fit px-5 mb-4 mx-auto">
          {!!minesWeeper?.disk
            ? minesWeeper.disk.map((rows, i) => (
                <div className="flex gap-1" key={i}>
                  {rows.map((cell, j) => (
                    <Cell
                      key={`${i}-${j}`}
                      item={cell}
                      clickFN={() => click([i, j])}
                      flagFN={() => flag([i, j])}
                    />
                  ))}
                </div>
              ))
            : Array.from({ length: board.r }).map((_, i) => (
                <div className="flex gap-1" key={i}>
                  {Array.from({ length: board.c }).map((_, j) => (
                    <Cell key={`${i}-${j}`} clickFN={() => start([i, j])} />
                  ))}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Disk;

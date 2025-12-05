"use client";
import { useEffect, useState } from "react";
import Disk from "../module/disk";
import Dropdown from "../module/dropdown";
import { boardOptions } from "@/constants/constants";
import { useMinesWeeper } from "@/hooks/useMinesWeeper";
import { IoVolumeMedium, IoVolumeMute } from "react-icons/io5";

const Main = () => {
  const [board, setBoard] = useState(boardOptions[0]);
  const [mute, setMute] = useState<Boolean>(false);
  const MinesWeeper = useMinesWeeper(board.r, board.c, board.m, mute);
  const { disk, lose, win, flags, time, click, end, restart } = MinesWeeper;

  const muteHandler = () => {
    setMute((mute) => !mute);
  };

  useEffect(() => {
    restart();
  }, [board]);

  return (
    <div className="bg-gray-100 min-h-screen pt-6 flex flex-col items-center gap-4">
      <div className="flex flex-wrap w-full items-center justify-around gap-3 bg-blue-200 mx-2 py-3 container md:mx-auto px-10 rounded-2xl ">
        <Dropdown value={board} onChange={setBoard} />

        <div className="flex gap-2 ">
          <button
            onClick={restart}
            className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-400 rounded shadow"
          >
            Restart
          </button>

          <button
            onClick={end}
            className="px-3 py-1 bg-red-500 hover:bg-red-400 rounded shadow text-white"
          >
            End
          </button>
        </div>

        <div className="flex gap-4 text-sm font-bold">
          <span
            className="flex gap-2 cursor-pointer"
            onClick={() => muteHandler()}
          >
            Volume :
            {mute ? (
              <IoVolumeMute className="text-lg" />
            ) : (
              <IoVolumeMedium className="text-lg" />
            )}
          </span>
          <span> Timer : {time ?? 0}</span>
          <span> 🚩 : {flags}</span>
        </div>
      </div>

      <Disk minesWeeper={MinesWeeper} board={board} />
    </div>
  );
};

export default Main;

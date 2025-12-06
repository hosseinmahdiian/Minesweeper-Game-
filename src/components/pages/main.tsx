"use client";
import { useEffect, useState } from "react";
import Disk from "../module/disk";
import Dropdown from "../module/dropdown";
import { boardOptions } from "@/constants/constants";
import { useMinesWeeper } from "@/hooks/useMinesWeeper";
import { IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import Image from "next/image";
import flagImg from "../../../public/flag.png";

const Main = () => {
  const [board, setBoard] = useState(boardOptions[0]);
  const [mute, setMute] = useState<Boolean>(false);
  const MinesWeeper = useMinesWeeper(board.r, board.c, board.m, mute);
  const { disk, lose, win, flags, time, click, end, restart } = MinesWeeper;

  const minutes = Math.floor((time ?? 0) / 60);
  const seconds = (time ?? 0) % 60;

  const muteHandler = () => {
    setMute((mute) => !mute);
  };

  useEffect(() => {
    restart();
  }, [board]);

  return (
    <div className=" bg-[#343434]  pt-6 flex flex-col items-center  md:h-[calc(100%-144px)] h-[calc(100%-80px)]  ">
      <div className="flex flex-wrap  items-center justify-around gap-3 bg-[#495057] mx-2 md:h-18 h-fit py-2 w-[calc(100%-20px)] container md:mx-auto px-10 rounded-2xl mb-4 ">
        <Dropdown value={board} onChange={setBoard} />

        {/* <div className="flex gap-2 "> */}
        <button
          onClick={restart}
          className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-400 rounded shadow"
        >
          Restart
        </button>

        {/* <button
            onClick={end}
            disabled
            className="px-3 py-1 bg-red-500 hover:bg-red-400 rounded shadow text-white"
          >
            End
          </button> */}
        {/* </div> */}

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
          <span>
            Timer: {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </span>
          <span className="flex gap-2 ">
            <Image
              src={flagImg}
              alt="Flag"
              width={16}
              height={16}
              draggable={false}
              className="pointer-events-none select-none touch-none"
            />
            : {flags}
          </span>
        </div>
      </div>

      <Disk minesWeeper={MinesWeeper} board={board} />
    </div>
  );
};

export default Main;

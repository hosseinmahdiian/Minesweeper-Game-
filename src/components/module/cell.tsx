"use client";
import { CellType } from "@/types/types.type";
import Content from "./content";
import { useRef } from "react";

interface CellProps {
  item?: CellType;
  clickFN: () => void;
  flagFN?: () => void;
}

const Cell: React.FC<CellProps> = ({ item, clickFN, flagFN }) => {
  const pressTimer = useRef<NodeJS.Timeout | null>(null);
  const isLongPress = useRef(false);

  const flagHandler = () => {
    flagFN && flagFN();
  };
  const clearHandler = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
    }
  };

  return (
    <div
      className={`w-10 h-10 flex items-center justify-center text-sm font-bold cursor-pointer select-none
        border border-gray-700 rounded shadow-lg
        ${
          item?.isOpen
            ? "bg-[#9d9d9d] shadow-inner"
            : "bg-[#343a40] hover:bg-[#495057]"
        }
      `}
      onClick={(e) => {
        e.preventDefault();
        if (!isLongPress.current) {
          clickFN();
        }
        isLongPress.current = false;
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        flagHandler();
      }}
      onPointerDown={(e) => {
        isLongPress.current = false;
        pressTimer.current = setTimeout(() => {
          isLongPress.current = true;
          flagHandler();

          if (navigator.vibrate) {
            navigator.vibrate(40);
          }
        }, 500);
      }}
      onPointerUp={() => {
        clearHandler();
      }}
      onPointerMove={() => {
        clearHandler();
      }}
    >
      <Content item={item ?? null} />
    </div>
  );
};

export default Cell;

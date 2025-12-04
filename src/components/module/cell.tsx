import { CellType } from "@/types/types.type";
import React from "react";

interface CellProps {
  key?: string;
  item?: CellType;
  onClick?: () => void;
  onDoubleClick?: () => void;
  onContextMenu?: () => void;
}

const Cell: React.FC<CellProps> = ({
  key,
  item,
  onClick,
  onDoubleClick,
  onContextMenu,
}) => {
  return (
    <div
      key={key}
      id={key}
      className="border w-10 h-10 flex items-center justify-center text-xs"
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenu && onContextMenu();
      }}
      onDoubleClick={(e) => {
        e.preventDefault();
        onDoubleClick && onDoubleClick();
      }}
    >
      {item?.isFlagged && "f"}
      {item?.isMine && "💣"}
      {!item?.isFlagged &&
        item?.isOpen &&
        !item?.isMine &&
        (item?.neighborMines == 0 ? "o" : item?.neighborMines)}
    </div>
  );
};

export default Cell;

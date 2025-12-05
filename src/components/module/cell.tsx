import { CellType } from "@/types/types.type";
import Content from "./content";

interface CellProps {
  item?: CellType;
  onClick?: () => void;
  onDoubleClick?: () => void;
  onContextMenu?: () => void;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
}

const Cell: React.FC<CellProps> = ({
  item,
  onClick,
  onDoubleClick,
  onContextMenu,
  onTouchStart,
  onTouchEnd,
}) => {
  // const getContent =

  return (
    <div
      className={`w-10 h-10 flex items-center justify-center text-sm font-bold cursor-pointer select-none
        border border-gray-400 rounded
        ${
          item?.isOpen
            ? "bg-gray-200 shadow-inner"
            : "bg-gray-400 hover:bg-gray-300"
        }
      `}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
      onDoubleClick={(e) => {
        e.preventDefault();
        onDoubleClick && onDoubleClick();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenu && onContextMenu();
      }}
      onTouchStart={(e) => {
        e.preventDefault();
        onTouchStart && onTouchStart();
      }}
      onTouchEnd={(e) => {
        e.preventDefault();
        onTouchEnd && onTouchEnd();
      }}
    >
      <Content item={item ?? null} />
    </div>
  );
};

export default Cell;

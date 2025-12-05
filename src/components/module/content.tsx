import { CellType } from "@/types/types.type";
import Image from "next/image";
import flagImg from "../../../public/flag.png";
import mineImg from "../../../public/mine.png";
import { NumberColors } from "@/enum/enums";

interface ContentProps {
  item: CellType | null;
}

const Content: React.FC<ContentProps> = ({ item }) => {
  if (item?.isMine && item?.isFlagged && item?.isOpen)
    return (
      <span className=" relative w-full">
        <span className="w-full h-0.5 bg-red-600 absolute inset-0 m-auto rotate-45"></span>
        <span className="w-full h-0.5 bg-red-600 absolute inset-0 m-auto -rotate-45"></span>
        <Image
          src={mineImg}
          alt="Mine"
          width={16}
          height={16}
          className="mx-auto"
        />
      </span>
    );

  if (item?.isFlagged)
    return <Image src={flagImg} alt="Flag" width={16} height={16} />;

  // if (item?.isMine)
  //   return <Image src={mineImg} alt="Mine" width={16} height={16} />;

  if (item?.isOpen) {
    if (item.isMine)
      return <Image src={mineImg} alt="Mine" width={16} height={16} />;
    if (item.neighborMines === 0) return "";

    return (
      item?.neighborMines && (
        <span className={NumberColors[item?.neighborMines]}>
          {item.neighborMines}
        </span>
      )
    );
  }
  return "";
};

export default Content;

import Image from "next/image";
import mineImg from "../../../public/mine.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" md:h-18 h-10 bg-[#343a40] shadow-lg flex items-center ">
      <div className="container mx-auto flex justify-between px-5 items-center  ">
        <Link href="/" className=" font-bold ">Minesweeper Game</Link>
        <Image
          src={mineImg}
          alt="Mine"
          width={28}
          height={28}
          draggable={false}
          className="pointer-events-none select-none touch-none animate-spin-slow  "
        />
      </div>
    </header>
  );
};

export default Header;

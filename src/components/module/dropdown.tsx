"use client";
import { boardOptions } from "@/constants/constants";
import { BoardType } from "@/types/types.type";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  value: BoardType;
  onChange: (board: BoardType) => void;
}

const Dropdown: React.FC<Props> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative w-44 text-sm font-bold select-none">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between
          bg-gray-500 px-3 py-2 rounded shadow border border-gray-500
          hover:bg-gray-400 transition   cursor-pointer"
      >
        <span>{value.label}</span>
        <FaChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full  mt-1 w-full bg-white rounded-md shadow-xl border  border-gray-500 z-50 overflow-hidden">
          {boardOptions.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className={`
                  w-full  border-b last:border-0 border-gray-500 px-3 py-2 text-center  transition hover:bg-gray-500
                  ${item.label === value.label ? "bg-gray-600" : "bg-gray-400"}
                `}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

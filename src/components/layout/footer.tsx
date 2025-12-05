import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" md:h-18 h-10 bg-[#343a40] shadow-lg flex justify-center items-center ">
      <h2>
        Develop By 
        <Link
          href="https://www.linkedin.com/in/hossein-mahdian-z-545a2b239"
          target="_blank"
          className="px-2 text-blue-600 "
        >
          Hossein Mahdian Z
        </Link>
      </h2>
    </footer>
  );
};

export default Footer;

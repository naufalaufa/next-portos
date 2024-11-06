"use client";
import { navlinks } from "@/utils/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-col gap-2 sm:flex-row items-center bg-white fixed top-0 left-0 right-0 text-black min-w-full w-screen justify-between  px-8 py-2 z-[9999999]">
      <h1 className="text-xs">Mochamad Naufal Aufa Rifqi</h1>
      {navlinks.map((item) => (
        <Link
          className={
            item.href === pathname
              ? "text-xs text-black font-semibold 2xl:text-lg"
              : "text-xs 2xl:text-lg"
          }
          key={item.id}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </header>
  );
};

export default Header;

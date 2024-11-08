import { projects } from "@/utils/type";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-slate-800 to-slate-950 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center py-16 px-8 w-full text-white">
      {projects.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-slate-900 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="flex justify-center">
            <Image
              src={item.image}
              alt={item.name}
              layout="responsive"
              width={500}
              height={500}
              className="rounded-lg object-cover "
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-lg font-semibold mb-2">{item.name}</h1>
            <p className="text-sm text-gray-300">{item.description}</p>
            <a
              href={item.href}
              target="_blank"
              className="mt-4 text-blue-400 hover:text-blue-600"
            >
              Visit link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;

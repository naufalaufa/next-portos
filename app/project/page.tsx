import { projects } from "@/utils/type";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen px-8 w-screen bg-slate-900 grid place-items-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item) => (
          <div
            key={item.id}
            className="bg-slate-600 relative grid grid-cols-1 md:grid-cols-3 items-center p-4 rounded-lg gap-4 place-content-center place-items-center"
          >
            <div className="relative col-span-1">
              <Image
                alt={item.name}
                src={item.image}
                width={150}
                height={150}
                quality={100}
                className="rounded-md"
              />
            </div>

            <div className="col-span-2 text-white">
              <h2 className="text-sm font-bold my-2 ">{item.name}</h2>
              <p className="text-xs my-2">{item.description}</p>
              <a target="_blank" href={item.href} className="text-blue-400">
                Visit Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

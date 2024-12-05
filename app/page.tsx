import Description from "@/components/Description";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="w-screen max-w-full bg-gradient-to-t from-slate-800 to-slate-950">
        <div className="min-h-screen bg-gradient-to-t from-slate-800 to-slate-950 grid place-items-center place-content-center py-16 px-8 w-full text-white bg-black">
          <div className="grid place-content-center place-items-center w-full h-[50vh] rounded-lg bg-gradient-to-t from-slate-600 to-slate-950 shadow-sm shadow-slate-800 ">
            <div className="w-full p-4">
              <h1 className="text-xl font-bold text-center my-8  sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-2xl">
                Mochamad Naufal Aufa Rifqi | Front End Developer | Fullstack
                Developer
              </h1>
              <p className="text-xs 2xl:text-lg mt-3 text-center">
                from hello world to deep world
              </p>
              <p className="text-xs 2xl:text-lg text-center">
                Can you help me to solve this error ?
              </p>
              <div className="flex items-center gap-3"></div>
            </div>
          </div>
          <Description />
        </div>
      </section>
    </>
  );
};

export default Page;

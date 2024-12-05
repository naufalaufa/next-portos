import Image from "next/image";
import React from "react";
import NaufalImage from "@/public/images/opal.png";
import Experience from "@/components/Experience";
import { socialmedias } from "@/utils/type";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <section className="w-screen max-w-full bg-gradient-to-t from-slate-800 to-slate-950 pt-20 sm:pt-0">
        <div className="min-h-screen bg-gradient-to-t from-slate-800 to-slate-950 grid grid-cols-1 sm:grid-cols-2 place-items-center place-content-center py-16 px-8 w-full text-white bg-black">
          <div
            style={{ position: "relative", height: "400px" }}
            className="mt-10 sm:mt-0"
          >
            <Image
              className="relative object-cover rounded-lg h-auto w-[100%]"
              placeholder="blur"
              src={NaufalImage}
              alt="naufal"
            />
          </div>
          <div>
            <p className="text-sm">
              Hi, halo, my name Mochamad Naufal Aufa Rifqi live in Jakarta -
              Indonesia as a Programmer expertise in website development as a
              Front End Developer expertise tech stack using react.js, give me a
              project, then I will take your money.
            </p>
            <div className="flex gap-4 items-center my-3">
              {socialmedias.map((item) => {
                return (
                  <Link legacyBehavior key={item.id} href={item.href} passHref>
                    <a target="_blank">
                      {item.icon ? <item.icon size={30} /> : null}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <Experience />
      </section>
    </>
  );
};

export default Page;

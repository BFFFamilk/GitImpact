import React from "react";
import Link from "next/link";
import Image from "next/image";
import { welcomeNavigation } from "@/constants";

const Welcome = () => {
  return (
    <div className="relative welcome h-screen">
      <div className="fixed flex justify-between items-center z-50 w-full min-h-16 bg-gray-100">
        <Link href="/" className="flex justify-between items-center">
          <div className="pl-5 max-md:hidden">
            <Image
              src="/icons/favicon.png"
              alt="gitimpact"
              width={40}
              height={40}
              className="rounded-[10px] border-[3px] border-blue-500"
            />
          </div>
          <p className="text-[24px] font-extrabold text-blue-500 pl-2">
            GitImpact <sup>●</sup>
          </p>
        </Link>

        <nav className="fixed top-[4rem] left-0 right-0 bottom-0 sm:static sm:flex sm:mx-auto sm:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto sm:flex-row">
            {welcomeNavigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="block relative font-bold text-sm uppercase text-blue-500 transition-colors hover:text-blue-500 px-5 py-5 max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-screen max-sm:hover:bg-blue-500 max-sm:hover:text-white max-sm:transition-colors max-sm:duration-500"
              >
                <span className="relative navigation-hover px-2 py-1">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
          <div className="sm:hidden absolute bottom-0 text-center w-full">
            Developed by BFFFamilk
          </div>
        </nav>

        <div className="pr-5">
          <button className="rounded-[10px] p-1 border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white transition-all ease-in duration-300 max-sm:hidden">
            <span className="m-2 font-semibold">Sign in</span>
          </button>
        </div>
      </div>

      <div className="relative w-full pt-10">
        <div className="flex justify-center items-center">
          <Image
            src="/Maintenance.png"
            width={800}
            height={600}
            alt="Maintenance"
          />
          <div className="absolute bottom-[2%] m-auto z-10 text-blue-500 font-bold text-[40px]">
            ⚠️Website is under development ⚠️
          </div>
        </div>
      </div>

      <div className="hidden bg-blue-500">Footer</div>
    </div>
  );
};

export default Welcome;

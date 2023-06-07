"use client";
import Image from "next/image";
import { FC } from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div
          className="
        absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br 
        from-blue-400
        to-[#020303]
        rounded-md
        filter
        blur-3xl
        opacity-50
        -z-50
        "
        />
        <Image
          src={"/images/logo.png"}
          alt={"logo"}
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Buscar
            </button>
          </form>
          <Avatar name="Alejandro marcano" round size="50" color="#020303" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p
          className="flex p-5 items-center text-sm font-light pr-5 rounded-xl shadow-xl
         w-fit bg-white italic max-w-3xl text-[#020303]"
        >
          <UserCircleIcon className="inline-block h-10 w-10 text-[#020303] mr-1" />
          GPT esta analizando tus tareas para el día...
        </p>
      </div>
    </header>
  );
};

export default Header;

"use client"

import { Text } from "react-font";
import { motion } from "framer-motion"
import Nav from "./components/nav";
export default function Home() {
  return (
    <motion.section className="w-[70rem] h-[90%]">
      <div className="flex w-full h-fit">
        <Text family='Lexend' className="text-[8rem] m-auto font-extrabold text-gray-300 tracking-widest">SOFA</Text >
      </div>
      <div className="bg-white w-full h-full rounded-t-3xl shadow-2xl shadow-black/50 p-5">
        <div className="rounded-2xl bg-[#f7f7f7] w-full h-full p-5">
          <Nav></Nav>
          <div className="absolute right-[50%] translate-x-[50%] flex flex-col pt-16 pb-16 w-full space-y-14 z-20">
            <div className="space-y-8">
              <Text family='Lexend' className="text-4xl text-center m-auto font-extrabold text-black tracking-widest">Best Designs of</Text >
              <Text family='Lexend' className="text-4xl text-center m-auto font-extrabold text-black tracking-widest">Furniture Collections</Text >
            </div>
            <button className="ml-auto mr-auto p-12 pt-1 pb-1 border-black border font-semibold">Check Out</button>
          </div>
          </Canvas>
        </div>
      </div>
    </motion.section>
  );
}
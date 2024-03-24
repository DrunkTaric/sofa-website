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
          </Canvas>
        </div>
      </div>
    </motion.section>
  );
}
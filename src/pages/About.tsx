import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const textVariants = {
    initial: { y: 20, scale: 0.95 },
    animate: {
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <div className="bg-[#E5F2FF] min-h-screen flex flex-row px-16">
      <div className="flex flex-col w-[45vw] ml-10 items-center gap-5 my-auto">
        <motion.div
          className="bg-[#4285F4] border border-black text-white font-semibold px-14 py-2 text-2xl rounded-full w-fit"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.6,
            duration: 0.8,
          }}
        >
          About GDGOC WOW
        </motion.div>
        <motion.div
          className="relative bg-white border-2 border-[#4285F4] rounded-2xl px-20 py-10 flex flex-col gap-8 text-lg"
          initial={{ y: 50, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <motion.span
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            Welcome to Google Developer Student Clubs Wonder of Wonders - where
            innovation meets community! 🌟
          </motion.span>
          <motion.span
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
          >
            GDSC WoW is an extraordinary annual celebration that brings together
            the brightest minds from across our global developer community.
            Here, we transform ideas into reality, forge lasting connections,
            and push the boundaries of what's possible.
          </motion.span>
          <motion.span
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8 }}
          >
            Join us for an incredible journey filled with workshops, hackathons,
            and networking opportunities that will inspire and empower you to
            make a difference in the tech world. Together, we're building more
            than just code - we're building the future!
          </motion.span>
          <motion.img
            src="/toddles/image_7.png"
            alt=""
            className="absolute w-28 top-0 left-0 -translate-x-1/2 -translate-y-1/6"
            initial={{ y: -100, rotate: -15, scale: 0.8 }}
            animate={{ y: 0, rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              bounce: 0.7,
              duration: 1.2,
              delay: 1,
            }}
            whileHover={{
              rotate: [-5, 5, -5, 5, 0],
              transition: { duration: 1, repeat: Infinity },
            }}
          />
          <motion.img
            src="/toddles/image_8.png"
            alt=""
            className="absolute w-28 bottom-0 right-0 translate-x-1/2 translate-y-1/6"
            initial={{ y: 100, rotate: 15, scale: 0.8 }}
            animate={{ y: 0, rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              bounce: 0.7,
              duration: 1.2,
              delay: 1.2,
            }}
            whileHover={{
              rotate: [-5, 5, -5, 5, 0],
              transition: { duration: 1, repeat: Infinity },
            }}
          />
        </motion.div>
      </div>
      <div className="relative w-[30vw] ml-auto my-40" id="puzzle">
        <motion.img
          src="/toddles/image_9.png"
          alt=""
          className="absolute top-0 left-0 w-[200px] object-contain ml-10"
          initial={{ y: -200, rotate: -15, scale: 0.9 }}
          animate={{ y: 0, rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.6,
            duration: 1.5,
            delay: 0.4,
          }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="/toddles/image_10.png"
          alt=""
          className="absolute top-0 right-0 w-[246px] h-[199px] object-contain mt-20"
          initial={{ y: -20, rotate: 5, scale: 0.95 }}
          animate={{ y: 0, rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 2,
            delay: 0.8,
          }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="/toddles/image_11.png"
          alt=""
          className="absolute bottom-0 left-0 w-[200px] object-contain ml-5 mb-10"
          initial={{ y: 20, rotate: -5, scale: 0.95 }}
          animate={{ y: 0, rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 2,
            delay: 1,
          }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="/toddles/image_12.png"
          alt=""
          className="absolute bottom-0 right-0 w-[200px] object-contain mr-11 -mb-10"
          initial={{ y: 200, rotate: 15, scale: 0.9 }}
          animate={{ y: 0, rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.6,
            duration: 1.5,
            delay: 0.6,
          }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
    </div>
  );
}

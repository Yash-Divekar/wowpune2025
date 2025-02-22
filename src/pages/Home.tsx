import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-04-19T08:00:00+05:30");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const toddleAnimations = [
    {
      initial: { y: -200, x: -50, rotate: 45, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 0.2,
      bounce: 0.6,
    },
    {
      initial: { y: -150, x: 50, rotate: -30, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 0.5,
      bounce: 0.5,
    },
    {
      initial: { y: -250, x: -30, rotate: 45, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 45, opacity: 1 },
      delay: 0.8,
      bounce: 0.7,
    },
    {
      initial: { y: -180, x: 40, rotate: -20, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 1.1,
      bounce: 0.6,
    },
    {
      initial: { y: -220, x: -20, rotate: 25, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 1.4,
      bounce: 0.5,
    },
    {
      initial: { y: -160, x: 30, rotate: -35, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 1.7,
      bounce: 0.7,
    },
  ];

  const bounceVariants = {
    initial: { y: -200, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="relative flex flex-row">
      <motion.img
        src="/grid.png"
        alt=""
        className="absolute -z-10 h-screen w-screen"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 1,
        }}
      />
      <motion.img
        src="/image_2.png"
        alt=""
        className="h-screen"
        initial={{ x: -100, rotate: -10, opacity: 0 }}
        animate={{ x: 0, rotate: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8,
        }}
      />

      {[1, 2, 3, 4, 5, 6].map((index) => (
        <motion.img
          key={index}
          src={`/toddles/image_${index}.png`}
          alt=""
          className={`absolute ${
            index === 1
              ? "w-32 top-[15vh] left-[0.5vw]"
              : index === 2
              ? "w-32 top-[15vh] left-[8vw]"
              : index === 3
              ? "w-28 top-[27vh] -left-[2vw] rotate-45"
              : index === 4
              ? "w-40 top-[40vh] left-[15vw]"
              : index === 5
              ? "w-20 top-[42vh] left-[7vw]"
              : "w-20 top-[43vh] left-[1vw]"
          }`}
          initial={toddleAnimations[index - 1].initial}
          animate={toddleAnimations[index - 1].animate}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
            delay: toddleAnimations[index - 1].delay,
            bounce: toddleAnimations[index - 1].bounce,
            duration: 1.2,
          }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: {
              rotate: {
                repeat: Infinity,
                duration: 2,
              },
            },
          }}
        />
      ))}

      <div className="text-black ml-auto text-right mr-10 mt-[25vh] flex flex-col gap-4 items-end">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            delay: 0.5,
          }}
        >
          <span className="text-2xl font-sans font-bold bg-gradient-to-r from-[#EA4335] via-[#4285F4] to-[#34A853] text-transparent bg-clip-text">
            Google Developer Groups पुणे
          </span>
          <br />
          <span className="text-lg">Presents</span>
        </motion.h2>

        <motion.img
          src="/wow_logo.png"
          alt=""
          className="w-[30vw]"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.7,
          }}
        />

        <motion.img
          src="/pune_slogan.png"
          alt=""
          className="w-[24vw]"
          initial={{ scale: 0, rotate: 10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.9,
          }}
        />

        <motion.div
          className="text-white text-center flex flex-row gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {[
            {
              label: "Days",
              value: timeLeft.days,
              color: ["#0043B2", "#3061B2", "#4285F4"],
            },
            {
              label: "Hours",
              value: timeLeft.hours,
              color: ["#BF0F00", "#B23328", "#EA4335"],
            },
            {
              label: "Minutes",
              value: timeLeft.minutes,
              color: ["#CCA300", "#B2941B", "#EABC00"],
            },
            {
              label: "Seconds",
              value: timeLeft.seconds,
              color: ["#006C1D", "#2A8442", "#34A853"],
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className={`border border-[${item.color[0]}] rounded-xl overflow-clip w-20`}
              variants={bounceVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ delay: 1.1 + index * 0.1 }}
            >
              <div className={`bg-[${item.color[1]}] py-1`}>{item.label}</div>
              <div className={`bg-[${item.color[2]}] py-3 text-2xl`}>
                {String(item.value).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="bg-gradient-to-r from-[#4285F4] to-[#79ACFF] px-10 py-2 text-white text-lg rounded-full mt-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 1.5,
          }}
        >
          Register now
        </motion.button>
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function CFS() {
  return (
    <div
      style={{ backgroundImage: "url('/grid.png')" }}
      className="min-h-screen bg-contain pt-30 px-20 flex flex-col gap-10 relative"
    >
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 1,
        }}
      >
        <h2 className="text-[#34A853] text-5xl font-bold">Call for speakers</h2>
        <p className="text-2xl mt-2">Join the WOW revolution.</p>
      </motion.div>

      {/* Bottom Images - Positioned below the card */}
      <motion.img
        src="/toddles/image_15.png"
        alt=""
        className="absolute left-1/2 bottom-[5vh] w-56 -translate-x-[calc(50%+22rem)] z-0"
        initial={{ y: 100, rotate: -15, scale: 0.8 }}
        animate={{ y: 0, rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 1.5,
          delay: 0.6,
        }}
      />
      <motion.img
        src="/toddles/image_16.png"
        alt=""
        className="absolute right-1/2 bottom-[10vh] w-40 translate-x-[calc(50%+22rem)] z-0"
        initial={{ y: 100, rotate: 15, scale: 0.8 }}
        animate={{ y: 0, rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 1.5,
          delay: 0.8,
        }}
      />

      {/* Main Card */}
      <motion.div
        className="relative flex flex-col items-center text-center gap-5 mx-auto bg-white px-20 py-20 rounded-2xl border border-black w-[40vw] shadow-2xl z-10"
        initial={{ y: 50, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 1,
        }}
      >
        <h2 className="text-5xl font-sans font-bold bg-gradient-to-r from-[#EA4335] to-[#0046B9] text-transparent bg-clip-text">
          Your Voice Matters
        </h2>
        <p>
          Share your extraordinary journey and inspire the next generation of
          innovators. Your unique perspective could spark the next technological
          revolution.
        </p>
        <motion.button
          className="bg-gradient-to-r from-[#4285F4] to-[#79ACFF] px-10 py-2 text-white text-lg rounded-full mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Proposal Submission Coming Soon
        </motion.button>

        {/* Top Images - Positioned above the card */}
        <motion.img
          src="/toddles/image_13.png"
          alt=""
          className="absolute -top-4 left-0 w-56 -translate-x-1/2 z-20"
          initial={{ y: -100, rotate: 15, scale: 0.8 }}
          animate={{ y: 0, rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
          }}
        />
        <motion.img
          src="/toddles/image_14.png"
          alt=""
          className="absolute top-0 right-0 w-56 translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ y: -100, rotate: -15, scale: 0.8 }}
          animate={{ y: 0, rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
            delay: 0.2,
          }}
        />
      </motion.div>
    </div>
  );
}

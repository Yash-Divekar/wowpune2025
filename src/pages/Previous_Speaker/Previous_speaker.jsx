import React, { useRef , useState, useEffect} from 'react';
import { motion, useInView , AnimatePresence } from 'framer-motion';
import speakersData from './Speakers.json';

function PreviousSpeaker() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeaker((prev) => (prev + 1) % speakersData.length);
    },5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-16 flex items-center justify-center overflow-hidden h-screen">
      {/* Background Grid Lines */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0 overflow-hidden"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img 
            src="/Grids/grid lines.png" 
            alt="Grid Background" 
            className="w-full object-cover"
          />
        </motion.div>

      {/* Main Speaker Section */}
      <div className="relative flex flex-col items-center z-30 justify-center mt-15">
        {/* Animated Title */}
        <motion.div
          className="absolute text-center text-2xl w-[300px] z-50 bg-blue-200 border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md"
          initial={{ y: "50%", scale: 1.2, opacity: 1 }}
          animate={isInView ? { y: "-500%", scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", duration: 2 }}
        >
          Previous Speaker
        </motion.div>

        {/* Speaker Image with Animated Quotes */}
        <div className="relative z-20">
          {/* Top-Left Quotes */}
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute top-[-100px] left-[-90px] w-36 rotate-[180deg] z-10"
            initial={{ y: 100, rotate: -70, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: -20, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2 }}
          />
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute top-[-90px] left-[20px] w-36 rotate-[180deg] z-10"
            initial={{ y: 100, rotate: -70, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: -20, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
          />

           {/* Speaker Image with Smooth Transition */}
           <AnimatePresence mode="wait">
            <motion.div 
              key={currentSpeaker} // Forces animation on change
              className="h-[500px] w-[800px] overflow-hidden"
              initial={{ opacity: 0  }}
              animate={{ opacity: 1 }}
              exit={{ opacity:0.95}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img 
                src={speakersData[currentSpeaker].image} 
                alt={speakersData[currentSpeaker].name} 
                className="w-full h-full object-cover speaker_shape"
              />
              <div className='absolute top-[85%] right-[5%] bg-red-500 w-[30%] rounded-xl p-2 outline '>
                <h3 className='flex justify-center items-center font-semibold'>{`${speakersData[currentSpeaker].name}`}</h3>
                <hr />
                <p className='text-center'>{`${speakersData[currentSpeaker].description}`}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom-Right Quotes */}
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute bottom-[220px] right-[0px] w-36 rotate-[180deg] z-10"
            initial={{ y: 50, rotate: 200, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: 150, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
          />
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute bottom-[220px] right-[-100px] w-36 rotate-[180deg] z-10"
            initial={{ y: 50, rotate: 200, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: 150, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2 }}
          />
        </div>
      </div>
    </section>
  );
}

export default PreviousSpeaker;

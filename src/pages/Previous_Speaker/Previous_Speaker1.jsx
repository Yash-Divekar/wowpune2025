import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

function PreviousSpeaker1() {
  const leftQuoteControls1 = useAnimationControls();
  const leftQuoteControls2 = useAnimationControls();
  const rightQuoteControls1 = useAnimationControls();
  const rightQuoteControls2 = useAnimationControls();

  useEffect(() => {
    const animateQuotes = async () => {
      // Initial state (quotes closed)
      await Promise.all([
        leftQuoteControls1.start({ x: -120, y: -110, rotate: 100 }),
        leftQuoteControls2.start({ x: -20, y: -110, rotate: 100 }),
        rightQuoteControls1.start({ x: 750, y: -350, rotate: 340 }),
        rightQuoteControls2.start({ x: 700, y: -350, rotate: 340 })
      ]);

      // Animate to open state
      await Promise.all([
        leftQuoteControls1.start({ 
          x: -100,
          y: -90,
          rotate: 150,
          transition: { duration: 0.8, ease: "easeOut" }
        }),
        leftQuoteControls2.start({ 
          x: 0,
          y: -90,
          rotate: 150,
          transition: { duration: 0.8, ease: "easeOut" }
        }),
        rightQuoteControls1.start({ 
          x: 750,
          y: -350,
          rotate: 340,
          transition: { duration: 0.8, ease: "easeOut" }
        }),
        rightQuoteControls2.start({ 
          x: 700,
          y: -350,
          rotate: 340,
          transition: { duration: 0.8, ease: "easeOut" }
        })
      ]);
    };

    animateQuotes();
  }, []);

  return (
    <section className="relative py-16 flex items-center justify-center overflow-hidden h-screen">
      {/* Background Grid Lines */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-70 z-0 overflow-hidden">
        <img 
          src="/src/assets/grid lines.png" 
          alt="Grid Background" 
          className="w-full object-cover"
        />
      </div>

      {/* Main Speaker Section */}
      <div className="relative flex flex-col items-center z-30 justify-center mt-15">
        {/* Label */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-[-30px] text-center text-2xl w-[300px] z-50 bg-blue-200 border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md"
        >
          Previous Speaker
        </motion.div>

        {/* Speaker Image with Quotes on Corners */}
        <div className="relative z-20">
          {/* Left Quotes */}
          <motion.div
            animate={leftQuoteControls1}
            className="absolute z-10"
            name="quote1"
          >
            <img 
              src="/src/assets/Green_Quote.png" 
              alt="Quote" 
              className="w-36"
            />
          </motion.div>

          <motion.div
            animate={leftQuoteControls2}
            className="absolute z-4"
            name="quote2"
          >
            <img 
              src="/src/assets/Green_Quote.png" 
              alt="Quote" 
              className="w-36"
            />
          </motion.div>

          {/* Speaker Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-[500px] w-[800px] overflow-hidden"
          >
            <img 
              src="/src/assets/Previous_Speakers/test.jpg" 
              alt="Speaker" 
              className="w-full h-full object-cover speaker_shape"
            />
          </motion.div>

          {/* Right Quotes */}
          <motion.div
            animate={rightQuoteControls1}
            className="absolute z-40"
          >
            <img 
              src="/src/assets/Green_Quote.png" 
              alt="Quote" 
              className="w-36"
              name="quote3"
            />
          </motion.div>
          <motion.div
            animate={rightQuoteControls2}
            className="absolute z-40"
          >
            <img 
              src="/src/assets/Green_Quote.png" 
              alt="Quote" 
              className="w-36"
              name="quote4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PreviousSpeaker1;
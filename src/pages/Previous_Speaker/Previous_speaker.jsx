import React from 'react';

function PreviousSpeaker() {
  return (
    <section className="relative py-16 flex items-center justify-center mt-[30px]">
      {/* Background Grid Lines */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-50 z-0">
        <img src="/src/assets/grid lines.png" alt="Grid Background" className="w-full h-auto" />
      </div>

      {/* Main Speaker Section */}
      <div className="relative flex flex-col items-center z-30">
        {/* Label */}
        <div className="absolute top-[-30px] text-center text-2xl w-[300px] z-50 bg-blue-200 border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md">
          Previous Speaker
        </div>

        {/* Speaker Image with Quotes on Corners */}
        <div className="relative z-20"> {/* Make sure this is above background */}
          {/* Top-Left Quote */}
          <img 
            src="/src/assets/Green_Quote.png" 
            alt="Quote" 
            className="absolute top-[-90px] left-[-90px] w-36 rotate-[150deg] z-20"
          />
          <img 
            src="/src/assets/Green_Quote.png" 
            alt="Quote" 
            className="absolute top-[-90px] left-[20px] w-36 rotate-[150deg] z-40"
          />

          {/* Speaker Image */}
          <img 
            src="/src/assets/Previous_Speakers/test.jpg" 
            alt="Speaker" 
            className="h-[500px] rounded-lg shadow-lg z-30 object-cover wave-clip"
          />

          {/* Bottom-Right Quote */}
          <img 
            src="/src/assets/Green_Quote.png" 
            alt="Quote" 
            className="absolute bottom-[220px] right-[0px] w-36 rotate-[340deg] z-20"
          />
          <img 
            src="/src/assets/Green_Quote.png" 
            alt="Quote" 
            className="absolute bottom-[220px] right-[-100px] w-36 rotate-[340deg] z-40"
          />
        </div>
      </div>
    </section>
  );
}

export default PreviousSpeaker;

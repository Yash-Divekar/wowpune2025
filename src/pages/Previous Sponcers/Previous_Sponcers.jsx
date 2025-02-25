import React, { useRef, useState } from "react";
import Sponsors from "./Sponcers.json";

function Previous_Sponsors() {
  const [Year, setYear] = useState("2024");
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative bg-red-100 py-17 px-4 min-h-screen overflow-hidden "
      style={{ backgroundImage: "url('/Grids/grid dots.svg')" }}
    >
      <div className="flex flex-col">
        {/* Title */}
        <div className="inline-block mt-5">
          <div className="flex justify-end">
            <h2 className="text-white text-2xl md:text-3xl font-semibold bg-red-500 px-6 py-3 rounded-full shadow-lg text-center w-[30%] mr-10">
              Previous Sponsors
            </h2>
          </div>

          {/* Year Buttons */}
          <div className="flex flex-wrap justify-start h-12 ml-10">
            <button
              className={`ml-10 px-6 py-2 font-semibold transition duration-300 shadow-md text-xl rounded-lg ${
                Year === "2023"
                  ? "bg-white text-black"
                  : "bg-black text-white hover:bg-gray-500"
              }`}
              onClick={() => setYear("2023")}
            >
              2023
            </button>

            <button
              className={`px-6 py-2 font-semibold transition duration-300 shadow-md text-xl rounded-lg ${
                Year === "2024"
                  ? "bg-white text-black"
                  : "bg-black text-white hover:bg-gray-500"
              }`}
              onClick={() => setYear("2024")}
            >
              2024
            </button>
          </div>
        </div>

        {/* Scroll Buttons */}
        <button
          className="absolute left-10 top-[55%] -translate-y-1/2 p-2 rounded-full hover:scale-110 transition"
          onClick={scrollLeft}
        >
          <img src="/Doddles/arrows.svg" alt="" className="h-[60px] w-auto rotate-180" />
        </button>

        <button
          className="absolute right-10 top-[55%] -translate-y-1/2 p-2 rounded-full hover:scale-110 transition"
          onClick={scrollRight}
        >
          <img src="/Doddles/arrows.svg" alt="" className="h-[60px] w-auto" />
        </button>

        {/* Sponsors Grid with Custom Horizontal Scrollbar */}
        <div className="overflow-x-auto w-full flex justify-center rounded-2xl">
          <div
            ref={scrollRef}
            className="flex flex-nowrap overflow-x-scroll snap-x snap-mandatory w-[90%] max-w-[1500px] rounded-2xl
              custom-horizontal-scrollbar"
          >
            <div className="grid grid-rows-2 grid-flow-col gap-6 bg-white p-6 md:p-10 rounded-2xl shadow-xl w-max">
              {Sponsors[Year].map((sponsor, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between w-[200px] h-[200px] p-4 border border-gray-200 rounded-xl shadow-sm bg-gray-50 transition hover:shadow-lg snap-center"
                >
                  {/* Image */}
                  <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-white p-2 shadow">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Sponsor Name */}
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-sm md:text-base text-black font-semibold mt-3 px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  >
                    {sponsor.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Horizontal Scrollbar */}
      <style jsx>{`
        /* Custom Horizontal Scrollbar */
        .custom-horizontal-scrollbar::-webkit-scrollbar {
          height: 6px; /* Thin scrollbar */
        }
        .custom-horizontal-scrollbar::-webkit-scrollbar-thumb {
          background: #ef4444; /* Red scrollbar */
          border-radius: 6px;
        }
        .custom-horizontal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #dc2626; /* Darker red on hover */
        }
        .custom-horizontal-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        /* Firefox */
        .custom-horizontal-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ef4444 transparent;
        }
      `}</style>
    </section>
  );
}

export default Previous_Sponsors;

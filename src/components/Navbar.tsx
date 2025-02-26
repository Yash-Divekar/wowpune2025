import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="fixed font-sans flex flex-row justify-center gap-2 
  top-1/30 sm:top-20 
  right-1/2 sm:right-10 
  z-40 
  w-[90%] sm:w-auto 
  left-1/2 sm:left-auto transform -translate-x-1/2 sm:translate-x-0">

      <a
        href="#home"
        className="border border-black rounded-l-full px-4 py-2 font-bold text-basic sm:text-2xl bg-white"
      >
        GDGoC
      </a>
      <div className="border border-black rounded-r-full px-3 sm:px-8 py-2 flex flex-row gap-2 sm:gap-8 text-sm items-center bg-white">
        <Link to="home" smooth={true} duration={600} className="cursor-pointer">
          Home
        </Link>
        <Link to="about" smooth={true} duration={600} className="cursor-pointer">
          About
        </Link>
        <Link to="speaker" smooth={true} duration={600} className="cursor-pointer">
          Speaker
        </Link>
        <Link to="sponsor" smooth={true} duration={600} className="cursor-pointer">
          Sponsor
        </Link>
        <Link to="faq" smooth={true} duration={600} className="cursor-pointer">
          FAQ
        </Link>
      </div>
    </div>
  );
}

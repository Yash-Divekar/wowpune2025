import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="fixed font-sans flex flex-row gap-2 top-10 right-10 z-40">
      <a
        href="#home"
        className="border border-black rounded-l-full px-4 py-2 font-bold text-2xl bg-white"
      >
        GDGOC
      </a>
      <div className="border border-black rounded-r-full px-8 py-2 flex flex-row gap-8 items-center bg-white">
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

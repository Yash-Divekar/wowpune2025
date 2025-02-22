export default function Navbar() {
  return (
    <div className="fixed font-sans flex flex-row gap-2 top-10 right-10 z-40">
      <a
        href=""
        className="border border-black rounded-l-full px-4 py-2 font-bold text-2xl bg-white"
      >
        GDGOC
      </a>
      <div className="border border-black rounded-r-full px-8 py-2 flex flex-row gap-8 items-center bg-white">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Speaker</a>
        <a href="">Sponsor</a>
        <a href="">FAQ</a>
      </div>
    </div>
  );
}

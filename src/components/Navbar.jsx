export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="sm:mmx-auto px-3 sm:px-14 lg:px-20">
        <div className="flex h-14 items-center justify-between">
          <a className="text-xl" href="/">
            Jason E. Morris
          </a>
          <span className="text-light font-bold uppercase italic">Vote For Experience</span>
        </div>
      </div>
    </nav>
  );
}

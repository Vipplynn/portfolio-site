function Navbar() {
    return (
      <nav className="w-full fixed top-0 left-0 bg-white z-50 shadow">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-lg font-semibold">Christian Cho</span>
          <div className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#featured-projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
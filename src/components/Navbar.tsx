
import logo from "/logo.png";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Site Name */}
        <a href="#hero" className="flex items-center">
          <img src={logo} alt="Christian Cho Logo" className="h-8 w-8 mr-2" />
        </a>

        {/* Navigation Links */}
        <div className="space-x-4 text-sm">
          <a href="#about" className="relative inline-block text-gray-700 hover:text-black transition-colors duration-300">
            <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
              About
            </span>
          </a>
          <a href="#featured-projects" className="relative inline-block text-gray-700 hover:text-black transition-colors duration-300">
            <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                Projects
            </span>
          </a>
          <a href="#contact" className="relative inline-block text-gray-700 hover:text-black transition-colors duration-300">
            <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

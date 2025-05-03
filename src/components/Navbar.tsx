
import logo from "../assets/logo.png";

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
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#featured-projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

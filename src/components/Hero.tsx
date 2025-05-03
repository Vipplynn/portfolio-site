import portrait from "../assets/portrait.jpg";

function Hero() {
  return (
    <section id="hero" className="py-8 bg-white min-h-screen flex items-center">
      <div className="w-full max-w-screen-xl mx-auto px-8 flex flex-col md:flex-row items-stretch gap-x-12">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end h-full">
          <img
            src={portrait}
            alt="Portrait of Christian"
            className="max-h-[24rem] w-72 md:w-80 object-cover object-top rounded-xl border-4 border-gray-200 shadow"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-between h-full -mt-2">
          <div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 relative top-4 md:top-0">Christian Cho</h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-8">Computer Science Student @ SFU</h2>
            <p className="text-gray-700 mb-8 max-w-prose md:max-w-md mx-auto md:mx-0 text-justify text-lg leading-relaxed">
              I’m a second-year Computer Science student at Simon Fraser University, building a strong
              foundation in full-stack development. I’m passionate about creating scalable,
              user-focused software and continuously improving as a developer and collaborator.
            </p>
          </div>

          <div>
            <a
              href="#featured-projects"
              className="inline-block bg-blue-600 text-white px-8 py-4 text-lg rounded hover:bg-blue-700 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

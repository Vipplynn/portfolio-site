function Hero() {
    return (
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-white">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I’m Christian 👋</h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          I’m a Computer Science student at SFU building playful and purposeful digital experiences.
        </p>
        <div className="mt-6">
          <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            View My Projects
          </a>
        </div>
      </section>
      
    );
  }
  
  export default Hero;
  
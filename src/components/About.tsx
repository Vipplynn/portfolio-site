function About() {
    return (
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700">
            I’m currently a 2nd-year CS student at Simon Fraser University. I’ve won multiple hackathons,
            and I’m passionate about web dev, sound design, and crafting interactive user experiences.
          </p>
  
          <ul className="space-y-4 border-l-2 border-blue-600 pl-4">
            <li>
              <span className="font-semibold">🏆 Mar 2024</span> — Won 3rd place at Mountain Madness Hackathon
            </li>
            <li>
              <span className="font-semibold">🔨 Apr 2025</span> — Built CookCompass, a recipe finder web app
            </li>
            <li>
              <span className="font-semibold">🎓 Now</span> — Working on personal projects to land a co-op!
            </li>
          </ul>
        </div>
      </section>
    );
  }
  
  export default About;
  
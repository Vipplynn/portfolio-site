import { projects, Project } from "../data/projects";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function FeaturedProjects() {
  const featured = projects.filter((project: Project) => project.featured);

  return (
    <motion.section
      id="featured-projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Featured Projects — Projects I am especially proud to showcase!</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.02}
              transitionSpeed={1000}
              className="backface-hidden transform-style-3d transform translate-z-0 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:-translate-y-1 rounded-xl"
            >
            <div key={idx} className="bg-gray-100 p-6 rounded shadow h-full min-h-[350px] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400 ml-4 whitespace-nowrap">{project.date}</p>
              </div>

              <p className="mt-2 text-gray-700 text-sm">{project.description}</p>

              <h4 className="font-semibold mt-3 text-sm">Features:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <p className="mt-3 text-sm text-gray-800">
                <strong>My Contributions:</strong> {project.contribution}
              </p>

              <p className="mt-2 text-xs text-gray-500">{project.tech.join(" • ")}</p>

              <div className="mt-3 space-x-4">
                {project.links.website && (
                  <a
                    href={project.links.website}
                    className="relative inline-block text-sm text-blue-600 hover:text-black transition-colors duration-300"
                    target="_blank"
                  >
                    <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                      Website
                    </span>
                  </a>
                )}
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    className="relative inline-block text-sm text-blue-600 hover:text-black transition-colors duration-300"
                    target="_blank"
                  >
                    <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                      Repository
                    </span>
                  </a>
                )}
                {project.links.video && (
                  <a
                  href={project.links.video}
                  className="relative inline-block text-sm text-blue-600 hover:text-black transition-colors duration-300"
                  target="_blank"
                >
                  <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                    Demo Video
                  </span>
                </a>
                )}
              </div>
            </div>
            </Tilt>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturedProjects;

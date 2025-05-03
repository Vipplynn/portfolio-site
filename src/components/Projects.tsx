import { projects, Project } from "../data/projects";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project: Project, idx: number) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              glareEnable={false}
              scale={1.02}
              transitionSpeed={1000}
              className="backface-hidden transform-style-3d transform translate-z-0">
            <div key={idx} className="bg-white p-6 rounded shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400 ml-4 whitespace-nowrap">
                  {project.date}
                </p>
              </div>

              <p className="mt-2 text-gray-700 text-sm">{project.description}</p>

              <h4 className="font-semibold mt-3 text-sm">Features:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {project.features.map((feature: string, i: number) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <p className="mt-3 text-sm text-gray-800">
                <strong>My Contributions:</strong> {project.contribution}
              </p>

              <p className="mt-2 text-xs text-gray-500">
                {project.tech.join(" • ")}
              </p>

              <div className="mt-3 space-x-4">
                {project.links.website && (
                  <a
                    href={project.links.website}
                    className="text-blue-600 underline text-sm"
                    target="_blank"
                  >
                    Website
                  </a>
                )}
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    className="text-blue-600 underline text-sm"
                    target="_blank"
                  >
                    Repository
                  </a>
                )}
                {project.links.video && (
                  <a
                    href={project.links.video}
                    className="text-blue-600 underline text-sm"
                    target="_blank"
                  >
                    Demo Video
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

export default Projects;

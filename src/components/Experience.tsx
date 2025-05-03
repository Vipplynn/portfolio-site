import { experience, Experience as ExperienceType } from "../data/experience";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section  
    id="experience"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="py-20 px-4 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>
        <div className="space-y-6">
          {experience.map((item: ExperienceType, idx: number) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.02}
              transitionSpeed={1000}
              className="backface-hidden transform-style-3d transform translate-z-0"
            >
              <div className="bg-white p-6 rounded shadow">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400 whitespace-nowrap">{item.date}</p>
                </div>
                <p className="text-sm text-gray-700 italic">{item.organization}</p>
                <p className="mt-2 text-sm text-gray-800">{item.description}</p>

                {item.tags && (
                  <motion.div
                    className="mt-2 flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      visible: {
                        transition: { staggerChildren: 0.06 }
                      }
                    }}
                  >
                    {item.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-600"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;

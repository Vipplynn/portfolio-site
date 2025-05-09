import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
      <motion.section
        id="about"
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 bg-gray-100 text-gray-800"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            I'm a second-year Computer Science student at Simon Fraser University, passionate about building meaningful, user-centered applications. My academic foundation is paired with hands-on experience from hackathons and personal projects, where I’ve learned to thrive in both collaborative and self-driven environments.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            I’ve been spending a lot of time learning modern web development tools like React and Vite. I'm especially interested in building things that are intuitive, responsive, and actually enjoyable to use. Every project I work on teaches me something new — whether it’s about code, design, or just how to solve problems better.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Outside of tech, I’m someone who values balance. I spend my time playing volleyball, gaming with friends, and creating digital art. These hobbies help me stay creative, collaborative, and always curious.
          </p>
        </div>
      </motion.section>
    );
}

export default About;

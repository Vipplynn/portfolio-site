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
            I'm a third-year Computer Science student at Simon Fraser University, driven by a curiosity for how software interacts with the physical world. My academic foundation is strengthened by hands-on experience from hackathons and technical projects, where I’ve learned to thrive in collaborative environments and tackle complex engineering challenges.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            Recently, I have shifted my focus toward embedded systems and low-level programming. I am passionate about mastering C++, optimizing real-time performance, and building robust architectures from scratch—such as custom networking protocols and signal processing pipelines. I enjoy the challenge of working within hardware constraints to create reliable, efficient, and tangible solutions.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Outside of engineering, I value balance and creativity. I spend my time playing volleyball, gaming with friends, and creating digital art. These hobbies keep me collaborative, adaptable, and constantly exploring new perspectives that I bring back to my technical work.
          </p>
        </div>
      </motion.section>
    );
}

export default About;

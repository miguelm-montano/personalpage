import { motion } from "framer-motion";
import PageLayout from "../../components/PageLayout";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <PageLayout>
      <motion.div
        className="h-full flex flex-col justify-center px-62 text-white text-right"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
      >
        <motion.h2
          className="font-unbounded font-black text-4xl mb-16"
          variants={item}
        >
          Hi, I'm Miguel!
        </motion.h2>

        <motion.p
          className="font-unbounded font-light text-3xl leading-10 max-w-4xl ml-auto mb-12"
          variants={item}
        >
          I build digital products by combining an industrial design mindset
          with full-stack engineering, always starting from the problem, the
          user, and the long-term maintainability of the solution
        </motion.p>

        <motion.div className="border-t border-white mb-12" variants={item} />

        <motion.p
          className="font-open-sans font-light text-xl leading-relaxed max-w-3xl ml-auto mb-6"
          variants={item}
        >
          Before becoming a developer, I studied Industrial Design, where I
          learned to approach every challenge from the user's perspective.
          Today, I apply that same mindset to software engineering, building
          digital products that balance user needs, technical quality and
          long-term maintainability.
        </motion.p>

        <motion.p
          className="font-open-sans font-light text-xl leading-relaxed max-w-4xl ml-auto"
          variants={item}
        >
          I'm curious by nature, I enjoy understanding how systems work,
          contributing to open source projects, and continuously improving my
          skills. I see AI as a powerful engineering tool that accelerates
          development without replacing critical thinking or code quality.
        </motion.p>
      </motion.div>
    </PageLayout>
  );
}

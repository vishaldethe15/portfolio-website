import { motion } from "framer-motion";
import "./styles.scss";
import MainContainer from "../MainContainer";
import Title from "../Title";
import { useGlobalContext } from "../../Context";

const h2Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1, // Adjust the duration as needed
      delay: 0.7, // Add a delay for a stagger effect
    },
  },
};

const Intro = () => {
  const { h1Variants, paragraphVariants } = useGlobalContext();

  return (
    <MainContainer>
      <Title>
        <motion.h1 variants={h1Variants} initial="hidden" animate="visible">
          hello, i am vishal dethe
          <span className="dot">.</span>
        </motion.h1>

        <motion.h2
          className="job-title"
          variants={h2Variants}
          initial="hidden"
          animate="visible"
        >
          full stack developer
        </motion.h2>
      </Title>
      <section className="desc">
        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
        >
          as a <span className="key-points"> full stack software engineer</span>
          , and a dedicated
          <span className="key-points"> freelancer</span>, I craft digital
          solutions that bridge creativity and functionality to bring your ideas
          to life. This portfolio is a reflection of my journey in crafting
          cutting-edge web applications and software solutions.
        </motion.p>
      </section>
    </MainContainer>
  );
};

export default Intro;

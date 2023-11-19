import { motion } from "framer-motion";
import DetailsList from "../DetailsList";
import MainContainer from "../MainContainer";
import Title from "../Title";
import { useGlobalContext } from "../../Context";

const AboutWrapper = () => {
  const { h1Variants } = useGlobalContext();
  return (
    <MainContainer>
      <Title>
        <motion.h1 variants={h1Variants} initial="hidden" animate="visible">
          about me<span className="dot">.</span>
        </motion.h1>
      </Title>
      <DetailsList />
    </MainContainer>
  );
};

export default AboutWrapper;

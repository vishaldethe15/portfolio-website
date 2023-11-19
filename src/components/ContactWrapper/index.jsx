import { motion } from "framer-motion";
import Form from "../Form";
import MainContainer from "../MainContainer";
import Title from "../Title";
import { useGlobalContext } from "../../Context";

const ContactWrapper = () => {
  const { h1Variants } = useGlobalContext();

  return (
    <MainContainer>
      <Title>
        <motion.h1 variants={h1Variants} initial="hidden" animate="visible">
          contact me<span className="dot">.</span>
        </motion.h1>
      </Title>
      <Form />
    </MainContainer>
  );
};

export default ContactWrapper;

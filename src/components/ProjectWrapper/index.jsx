import MainContainer from "../MainContainer";
import Title from "../Title";
import Card from "../Card";
import { motion } from "framer-motion";

import { projectList } from "../../data";

import "./styles.scss";
import { useGlobalContext } from "../../Context";

const ProjectWrapper = () => {
  const { h1Variants } = useGlobalContext();

  return (
    <MainContainer>
      <Title>
        <motion.h1 variants={h1Variants} initial="hidden" animate="visible">
          projects<span className="dot">.</span>
        </motion.h1>
      </Title>

      <ul className="card-container">
        {projectList.map((item, index) => {
          return (
            <li>
              <Card key={index} {...item} index={index} />
            </li>
          );
        })}
      </ul>
    </MainContainer>
  );
};

export default ProjectWrapper;

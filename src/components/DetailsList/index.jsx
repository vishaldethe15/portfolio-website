import "./styles.scss";
import { aboutMe } from "../../data";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../Context";

const DetailsList = () => {
  return (
    <div className="list-container">
      {aboutMe.map((item, index) => {
        return <ArticleItem key={index} {...item} />;
      })}
    </div>
  );
};

const ArticleItem = ({ id, title, desc, skillSet }) => {
  const { paragraphVariants } = useGlobalContext();

  return (
    <motion.article
      class="article"
      variants={paragraphVariants}
      initial="hidden"
      animate="visible"
    >
      <div class="article-num">{id}</div>
      <div class="article-content">
        <div class="title">{title}</div>
        <div class="story">
          <p>{desc}</p>

          <ul className="skills">
            {skillSet?.map((skill, index) => {
              return (
                <li key={index} className="chip">
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};

export default DetailsList;

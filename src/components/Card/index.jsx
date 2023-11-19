import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./styles.scss";
import { useGlobalContext } from "../../Context";

const Card = ({ index, img, title, desc, techStack, links }) => {
  const { paragraphVariants } = useGlobalContext();

  return (
    <motion.article
      variants={paragraphVariants}
      initial="hidden"
      animate="visible"
      className="card"
    >
      <section className={index % 2 == 0 ? `card-img` : `card-img  reverse`}>
        <img src={img} alt={title} />
      </section>
      <section
        className={index % 2 == 0 ? `card-content ` : `card-content reverse`}
      >
        <p className="card-label">featured project</p>
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{desc}</p>
        <ul className={index % 2 == 0 ? `tech-stack ` : `tech-stack reverse`}>
          {techStack.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>

        <ul className={index % 2 == 0 ? `links ` : `links reverse`}>
          <li>
            <Link to={links.github} target="blank">
              <i className="bi bi-github" title="Github"></i>
            </Link>
          </li>
          <li>
            <Link to={links.liveSite} target="blank">
              <i className="bi bi-box-arrow-up-right" title="Live Site"></i>
            </Link>
          </li>
        </ul>
      </section>
    </motion.article>
  );
};

export default Card;

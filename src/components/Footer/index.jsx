import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./styles.scss";

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "ease-out",
      type: "spring",
      bounce: 0.3,
      duration: 1,
      delay: 1,
    },
  },
  hidden: { opacity: 0, x: "100%" },
};

const SocialLinks = ({ data }) => {
  return (
    <footer className="footer">
      <motion.ul
        className="social-links"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        {data.map((link, index) => (
          <SocialLinkItem key={index} url={link.url} title={link.title} />
        ))}
      </motion.ul>
    </footer>
  );
};

const SocialLinkItem = ({ url, title }) => {
  return (
    <motion.li>
      <Link className="link" to={url} target="blank">
        {title}
      </Link>
    </motion.li>
  );
};

export default SocialLinks;

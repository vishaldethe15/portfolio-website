import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, x: "-100%" },
};

const NavLinks = ({ data }) => {
  return (
    <nav className="navbar">
      <motion.ul
        className="nav-links"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        {data.map((link, index) => (
          <NavItem key={index} url={link.url} title={link.title} />
        ))}
      </motion.ul>
    </nav>
  );
};

export const NavItem = ({ url, title }) => {
  return (
    <motion.li>
      <NavLink className="link" to={`https://vishal-dethe.netlify.app/${url}`}>
        {title}
      </NavLink>
    </motion.li>
  );
};

export default NavLinks;

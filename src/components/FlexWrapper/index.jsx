import "./styles.scss";
import NavLinks from "../NavLinks";
import SocialLinks from "../Footer";

import { navLinks, socialLinks } from "../../data";

const FlexWrapper = ({ children }) => {
  return (
    <div className="flex-wrapper">
      <NavLinks data={navLinks} />
      {children}
      <SocialLinks data={socialLinks} />
    </div>
  );
};

export default FlexWrapper;

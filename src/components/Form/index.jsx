import { motion } from "framer-motion";
import { useGlobalContext } from "../../Context";

import "./styles.scss";

const Form = () => {
  const { paragraphVariants } = useGlobalContext();

  return (
    <motion.form
      className="form"
      variants={paragraphVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="input-wrapper">
        <InputElement type={"text"} uniqueId={"name"} text={"name"} />
        <InputElement type={"email"} uniqueId={"email"} text={"email"} />
      </div>

      <div className="msg-field">
        <label htmlFor="msg">message</label>
        <textarea id="msg"></textarea>
      </div>

      <button>send message</button>
    </motion.form>
  );
};

const InputElement = ({ type, uniqueId, text }) => {
  return (
    <div className="input-field">
      <label htmlFor={uniqueId}>{text}</label>
      <input type={type} id={uniqueId} />
    </div>
  );
};

export default Form;

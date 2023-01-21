import { motion } from "framer-motion";

import { textVariant, textVariant2 } from "../../client/utils/motion";
import React from "react";

export default function TypingText({ title, classes, delay = 0.1 }) {
  return (
    <motion.p
      className={`${classes}`}
      initial={"hidden"}
      whileInView={"show"}
      variants={textVariant(delay)}
    >
      {title}
    </motion.p>
  );
}

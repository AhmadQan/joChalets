import { motion } from "framer-motion";

import { textVariant, textVariant2 } from "../../client/utils/motion";
import React from "react";

export default function TypingText({ title }) {
  return (
    <motion.p
      className="font-Koulen font-semibold text-5xl text-primaryLigther"
      initial={"hidden"}
      whileInView={"show"}
      variants={textVariant(0.1)}
    >
      {title}
    </motion.p>
  );
}

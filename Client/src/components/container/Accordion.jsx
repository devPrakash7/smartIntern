import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
const Accordion = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown
          className={`${
            id === activeIndex ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
          onClick={() => handleClick(id)}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-gray">
            If SmartIntern is a platform related to internships, career development, or education, 
            I recommend checking official websites, press releases, or contacting the relevant 
            organization directly for the most accurate and up-to-date information. Additionally, 
            online searches and social media platforms may provide insights into any developments or 
            activities associated with SmartIntern
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;

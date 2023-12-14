'use client'

import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Telkomsel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        IoT Analytics Intern
        <span className="text-textGreen tracking-wide">Telkomsel</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2022 - July 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with experienced IoT teams to design, develop, and deliver innovative products and services using data scraping, cleaning, dashboard creation, and other analytics techniques.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Followed best practices for the full IoT analytics life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations, in collaboration with IoT engineers and product managers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Analyzed over 4 million rows of data on a daily basis using Python, PostgreSQL, and Tableau to identify trends and provide insights on EDC payment, such as transaction volume, customer behavior, and fraud detection.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and implemented data-driven decision-making strategies to help companies make business decisions, such as investment feasibility analysis or new product development, based on data analysis and visualization.
        </li>
      </ul>
    </motion.div>
  );
};

export default Telkomsel;

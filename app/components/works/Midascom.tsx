'use client'

import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Midascom = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        IT Assistant
        <span className="text-textGreen tracking-wide">Midascom Network</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2023 - Dec 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, performant, maintainable code for a diverse array of client and internal projects
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Handling technical issues experienced by employees, clients, or company partners, both directly and through phone calls, emails, or chats.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Performing installation, configuration, and maintenance of operating systems, applications, and databases
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
        </li>
      </ul>
    </motion.div>
  );
};

export default Midascom;

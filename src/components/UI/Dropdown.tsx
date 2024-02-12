import React, { useState } from "react";
import { motion } from "framer-motion";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const borderStyle = showMenu ? "0" : "0.5rem";
  return (
    <motion.div
      className={`h-max w-[15rem] self-start`}
      initial={{ height: "3rem" }}
      animate={{ height: showMenu ? "auto" : "3rem" }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="relative text-white bg-gray-700 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center w-full z-40"
        animate={{
          borderBottomRightRadius: borderStyle,
          borderBottomLeftRadius: borderStyle,
        }}
        transition={{ delay: showMenu ? 0.0 : 0.2, duration: 0.1 }}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        Please select a reigon
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </motion.button>

      <motion.ul
        animate={{
          y: showMenu ? "0%" : "-100%",
          opacity: showMenu ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="text-sm text-gray-700 dark:text-gray-200 rounded-b-lg shadow dark:bg-gray-700 h-max max-h-[8.5rem] w-[15rem]"
      >
        {children}
      </motion.ul>
    </motion.div>
    // <div className="">
    //   <div className="">
    //     <motion.button
    //       className=""
    //       type="button"
    //       onClick={() => setShowMenu((prev) => !prev)}
    //       animate={{
    //         borderBottomRightRadius: borderStyle,
    //         borderBottomLeftRadius: borderStyle,
    //       }}
    //       transition={{ delay: showMenu ? 0.0 : 0.2, duration: 0.1 }}
    //     >

    //     </motion.button>
    //   </div>

    // </div>
  );
};

export default Dropdown;

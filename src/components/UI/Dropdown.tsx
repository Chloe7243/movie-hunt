import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton
                className={`relative text-white bg-gray-700 font-medium text-sm px-4 py-2 flex items-center w-full rounded-t-lg min-w-[15rem] ${
                  !isExpanded ? "rounded-b-lg" : ""
                }`}
              >
                <Box as="span" flex="1" textAlign="left">
                  Please select a reigon
                </Box>
                <AccordionIcon fontSize={"1.2rem"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul className="text-sm text-gray-700 dark:text-gray-200 rounded-b-lg shadow dark:bg-gray-700 h-max max-h-[8.5rem] w-[15rem]">
                {children}
              </ul>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default Dropdown;

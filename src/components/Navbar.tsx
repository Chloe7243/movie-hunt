import Logo from "./UI/Logo";
import NavLinks from "./UI/NavLinks";
import { IoSearch } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";
import { PiUserCircleFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

import {
  Drawer,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [width, setWidth] = useState(document.body.clientWidth);

  useEffect(() => {}, [width]);
  window.addEventListener("resize", () => setWidth(document.body.clientWidth));

  const goTo = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <>
      <div className="bg-transparent absolute top-0 left-0 w-full flex justify-between items-center md:px-10 py-4 border-b px-3 z-10">
        <Logo />
        {width > 580 ? <NavLinks /> : null}
        <div className="text-white text-2xl flex gap-2 items-center">
          <Link to="/search">
            <IoSearch />
          </Link>
          <button>
            <PiUserCircleFill />
          </button>
          {width <= 580 ? (
            <button onClick={onOpen}>
              <HiMiniBars3 />
            </button>
          ) : null}
        </div>
      </div>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent className="py-10 bg-black z-20 top-20">
          <DrawerCloseButton
            onClick={onClose}
            className="flex flex-row justify-end"
          />
          <nav className="flex text-white font-montserrat items-center h-full flex-col gap-10 justify-center text-lg font-semibold">
            <button className="capitalize" onClick={() => goTo("/")}>
              home
            </button>
            <button className="capitalize" onClick={() => goTo("/movies")}>
              movies
            </button>
            <button className="capitalize" onClick={() => goTo("/tv-shows")}>
              tv shows
            </button>
          </nav>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;

import NavLinks from "./UI/NavLinks";
import { FaXTwitter, FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center p-4">
      <NavLinks />
      <div className="flex text-white gap-4 text-2xl">
        <a href="https://github.com/Chloe7243" target="_blank">
          <FaSquareGithub />
        </a>

        <a
          href="www.linkedin.com/in/stephanie-oluoha-09abb01aa"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/just__steph_" target="_blank">
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;

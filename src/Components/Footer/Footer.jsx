import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-[#465697] text-white p-10 md:p-16 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0"
    >
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact</h1>
        <h3 className="text-lg md:text-xl font-normal">Feel Free To Reach Out!</h3>
      </div>

      <ul className="text-lg md:text-xl flex flex-col md:flex-row gap-6 items-center">
        <li className="flex gap-3 items-center hover:text-indigo-300 transition-all duration-300">
          <MdOutlineEmail size={25} />
          <a href="mailto:akshaykhobragade462@gmail.com">akshaykhobragade462@gmail.com</a>
        </li>
        <li className="flex gap-3 items-center hover:text-indigo-300 transition-all duration-300">
          <CiLinkedin size={25} />
          <a href="https://www.linkedin.com/in/akshay-khobragade-4a281a263/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/akshay-khobragade-4a281a263/
          </a>
        </li>
        <li className="flex gap-3 items-center hover:text-indigo-300 transition-all duration-300">
          <FaGithub size={25} />
          <a href="https://github.com/Akshay19203" target="_blank" rel="noopener noreferrer">
            github.com/Akshay19203
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

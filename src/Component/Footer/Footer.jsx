import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F] rounded ">
      <nav className="grid grid-flow-col gap-4 text-white">
        <a className="link link-hover">Projects</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/muhammad-seyam-782964201">
          <FaLinkedin className="fill-current text-blue-500 w-10 h-10 " />
          </a>
          <a href="https://www.facebook.com/Seyam.014">
          <FaFacebookSquare className="fill-current text-blue-500 w-10 h-10 "/>
          </a>
          <a href="https://github.com/seyam14">
          <FaSquareGithub className="fill-current text-gray-500 w-10 h-10 "/> 
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-white">Copyright © 2023 - All rights reserved by Seyam</p>
      </aside>
    </footer>
  );
};

export default Footer;

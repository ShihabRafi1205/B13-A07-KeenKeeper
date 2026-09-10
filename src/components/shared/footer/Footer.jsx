import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#184f41] text-white py-10 px-6 font-sans w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        

        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
          KeenKeeper
        </h1>

        <p className="text-xs text-[#a4c3b9] text-center max-w-lg mb-6 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h2 className="text-sm font-medium mb-3">Social Links</h2>

        <div className="flex space-x-3 mb-10">
          <a
            href="#"
            className="bg-white text-[#184f41] p-2 rounded-full hover:bg-gray-200 transition duration-300 flex items-center justify-center"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="#"
            className="bg-white text-[#184f41] p-2 rounded-full hover:bg-gray-200 transition duration-300 flex items-center justify-center"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="#"
            className="bg-white text-[#184f41] p-2 rounded-full hover:bg-gray-200 transition duration-300 flex items-center justify-center"
          >
            <FaXTwitter size={16} />
          </a>
        </div>

       
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-[#7fa79b] pt-6 border-t border-[#2a6b5a]">
          <p className="mb-3 md:mb-0">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

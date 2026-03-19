import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {

  const socialLinks = [
    { icon: FaFacebook, link: "/" },
    { icon: FaLinkedin, link: "/" },
    { icon: FaGithub, link: "/" },
    { icon: FaTwitter, link: "/" },
    { icon: FaInstagram, link: "/" },
  ];

  return (
    <footer id="contact" className="bg-black text-white px-6 md:px-16 py-10">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-800 pb-6">
        
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-blue-400">
          Nitish.dev
        </h1>

        {/* Navigation */}
        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Projects</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                className="hover:text-blue-400 hover:scale-125 transition duration-300"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} Nitish. All rights reserved.
      </div>

    </footer>
  );
}
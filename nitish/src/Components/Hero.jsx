import React from "react";
import bg from "../Images/bg.png";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Hero() {

  const socialIcons = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/share/178zt2MwVs/" },
    { icon: <FaLinkedin />, link: "www.linkedin.com/in/nitish-kamboj-b649b93a9" },
    { icon: <FaWhatsapp />, link: "https://wa.me/918396066743" },
    { icon: <FaTwitter />, link: "/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/nitish_kamboz_dattana?igsh=OWNraWN3YWtrNGhx" },
  ];

  return (
    <div id="home" className="h-screen w-full relative">
      <img src={bg} className="h-screen w-full object-cover" />

      {/* Text Section */}
      <div className="absolute text-white top-1/2 left-10 -translate-y-1/2">
        <h1 className="text-5xl md:text-7xl font-semibold">Nitish</h1>
        <h2 className="text-2xl md:text-4xl font-bold tracking-wider">
          Web Developer
        </h2>

        <div className="pt-10 flex gap-6">
          <button className="rounded-2xl px-5 py-1 ring-1 hover:ring-blue-500/80 duration-300 hover:ring-4 hover:text-amber-100">
            Resume
          </button>
          <button className="rounded-2xl px-5 py-1 ring-1 hover:ring-blue-500/80 duration-300 hover:ring-4 hover:text-amber-100">
            Portfolio
          </button>
        </div>
      </div>

      <div className="absolute bottom-5 left-10 flex gap-4 text-white text-xl">
        {socialIcons.map((item, index) => (
          <a key={index} href={item.link} className="hover:text-blue-400 duration-300">
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
import React from "react";
import profile from "../Images/profile.png";

export default function About() {
  return (
    <div id="about" className="bg-black h-screen text-white py-20 px-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 flex flex-col gap-10 leading-relaxed tracking-widest">
        <h2 className="text-4xl font-bold mb-4 underline">ABOUT</h2>
        <p className="text-gray-400">
          I am a passionate and dedicated aspiring web developer with a strong
          interest in building modern, responsive, and user-friendly websites. I
          enjoy turning ideas into real-world digital experiences through clean
          and efficient code.
        </p>
        <p className="text-gray-400">
          I have a solid foundation in front-end technologies like HTML, CSS,
          JavaScript, and React, and I am continuously learning new tools and
          frameworks to improve my skills. I focus on creating visually
          appealing interfaces while ensuring performance and accessibility.
        </p>
        <p className="text-gray-400">
          As a fresher, I am eager to gain real-world experience, collaborate
          with professionals, and contribute to meaningful projects. I am
          committed to growing as a developer and building impactful digital
          solutions.
        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={profile} className="w-80 rounded-sm" />
      </div>
    </div>
  );
}

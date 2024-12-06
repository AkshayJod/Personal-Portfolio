import React from "react";

const ProjectCard = ({ title, main, image }) => {
  return (
    <div className="p-4 flex flex-col w-72 bg-gradient-to-br from-[#1e1e30] to-[#12122a] shadow-md shadow-black rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        className="rounded-t-2xl h-40 w-full object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4 flex flex-col gap-4">
        <h3 className="text-lg font-bold leading-tight text-white text-center">
          {title}
        </h3>
        <p className="text-sm leading-snug text-gray-400">{main}</p>
        <div className="flex gap-3 mt-4">
          <button className="flex-grow text-white py-2 text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#465697]">
            Demo
          </button>
          <button className="flex-grow text-white py-2 text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#3a3d7b]">
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
